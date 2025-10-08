package com.workbuddy.controller;

import com.razorpay.RazorpayException;
import com.workbuddy.dto.RazorpayOrderRequest;
import com.workbuddy.dto.RazorpayPaymentVerification;
import com.workbuddy.service.PaymentService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/razorpay")
@CrossOrigin(origins = "http://localhost:3000")
public class RazorpayController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/create-order")
    public ResponseEntity<Map<String, Object>> createOrder(@RequestBody RazorpayOrderRequest orderRequest) {
        try {
            // Create Razorpay order
            JSONObject order = paymentService.createRazorpayOrder(
                orderRequest.getAmount(),
                orderRequest.getCurrency(),
                orderRequest.getReceipt()
            );
            
            // Prepare response
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("orderId", order.get("id"));
            response.put("amount", order.get("amount"));
            response.put("currency", order.get("currency"));
            response.put("receipt", order.get("receipt"));
            
            return ResponseEntity.ok(response);
        } catch (RazorpayException e) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("error", e.getMessage());
            return ResponseEntity.status(500).body(response);
        }
    }
    
    @PostMapping("/verify-payment")
    public ResponseEntity<Map<String, Object>> verifyPayment(@RequestBody RazorpayPaymentVerification verification) {
        try {
            boolean isValid = paymentService.verifyPayment(
                verification.getRazorpayPaymentId(),
                verification.getRazorpayOrderId(),
                verification.getRazorpaySignature()
            );
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", isValid);
            
            if (isValid) {
                response.put("message", "Payment verified successfully");
                // Here you would update the booking and payment status in the database
            } else {
                response.put("message", "Payment verification failed");
            }
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("error", e.getMessage());
            return ResponseEntity.status(500).body(response);
        }
    }
}