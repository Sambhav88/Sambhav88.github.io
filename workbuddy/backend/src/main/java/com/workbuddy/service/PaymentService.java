package com.workbuddy.service;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.razorpay.Utils;
import com.workbuddy.model.Booking;
import com.workbuddy.model.Payment;
import com.workbuddy.repository.BookingRepository;
import com.workbuddy.repository.PaymentRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;
    
    @Autowired
    private BookingRepository bookingRepository;
    
    @Autowired(required = false)
    private RazorpayClient razorpayClient;

    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    public Optional<Payment> getPaymentById(Long id) {
        return paymentRepository.findById(id);
    }

    public Payment savePayment(Payment payment) {
        payment.setUpdatedAt(java.time.LocalDateTime.now());
        return paymentRepository.save(payment);
    }

    public boolean deletePayment(Long id) {
        if (paymentRepository.existsById(id)) {
            paymentRepository.deleteById(id);
            return true;
        }
        return false;
    }
    
    public List<Payment> getPaymentsByBookingId(Long bookingId) {
        return paymentRepository.findByBookingId(bookingId);
    }
    
    public Optional<Payment> processPayment(Long bookingId, Double amount, String paymentMethod) {
        // Find the booking
        Optional<Booking> bookingOpt = bookingRepository.findById(bookingId);
        if (!bookingOpt.isPresent()) {
            return Optional.empty();
        }
        
        Booking booking = bookingOpt.get();
        
        // Create a new payment
        Payment payment = new Payment(bookingId, amount, paymentMethod);
        // Generate a transaction ID
        payment.setTransactionId("TXN-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase());
        // Set status to processing
        payment.setStatus("PROCESSING");
        
        // Save the payment
        Payment savedPayment = savePayment(payment);
        
        // Update booking with payment information
        booking.setPaymentStatus("PROCESSING");
        booking.setPaymentMethod(paymentMethod);
        booking.setTransactionId(payment.getTransactionId());
        booking.setFinalPrice(amount);
        booking.setUpdatedAt(java.time.LocalDateTime.now());
        bookingRepository.save(booking);
        
        // Simulate payment processing delay
        try {
            Thread.sleep(2000); // Simulate 2 seconds processing time
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        // Simulate successful payment
        savedPayment.setStatus("COMPLETED");
        paymentRepository.save(savedPayment);
        
        // Update booking status
        booking.setPaymentStatus("COMPLETED");
        booking.setStatus("CONFIRMED");
        booking.setUpdatedAt(java.time.LocalDateTime.now());
        bookingRepository.save(booking);
        
        return Optional.of(savedPayment);
    }
    
    public Optional<Payment> getPaymentByTransactionId(String transactionId) {
        // This would need a custom query in the repository in a real implementation
        // For now, we'll iterate through all payments (not efficient but works for demo)
        List<Payment> payments = paymentRepository.findAll();
        for (Payment payment : payments) {
            if (transactionId.equals(payment.getTransactionId())) {
                return Optional.of(payment);
            }
        }
        return Optional.empty();
    }
    
    // Razorpay integration methods
    
    public JSONObject createRazorpayOrder(Double amount, String currency, String receipt) throws RazorpayException {
        // Check if Razorpay client is available
        if (razorpayClient == null) {
            throw new RazorpayException("Razorpay client not configured");
        }
        
        JSONObject orderRequest = new JSONObject();
        orderRequest.put("amount", amount * 100); // Amount in paise
        orderRequest.put("currency", currency);
        orderRequest.put("receipt", receipt);
        
        Order order = razorpayClient.orders.create(orderRequest);
        return order.toJson();
    }
    
    public boolean verifyPayment(String razorpayPaymentId, String razorpayOrderId, String razorpaySignature) {
        // Check if Razorpay client is available
        if (razorpayClient == null) {
            return false;
        }
        
        try {
            JSONObject options = new JSONObject();
            options.put("razorpay_payment_id", razorpayPaymentId);
            options.put("razorpay_order_id", razorpayOrderId);
            options.put("razorpay_signature", razorpaySignature);
            
            String secret = "your_razorpay_key_secret"; // This should be loaded from configuration
            return Utils.verifyPaymentSignature(options, secret);
        } catch (Exception e) {
            return false;
        }
    }
}