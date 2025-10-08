package com.workbuddy.service;

import com.workbuddy.model.Booking;
import com.workbuddy.model.Worker;
import com.workbuddy.repository.BookingRepository;
import com.workbuddy.repository.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;
    
    @Autowired
    private WorkerRepository workerRepository;
    
    @Autowired
    private WorkerService workerService;

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Optional<Booking> getBookingById(Long id) {
        return bookingRepository.findById(id);
    }

    public Booking saveBooking(Booking booking) {
        booking.setCreatedAt(LocalDateTime.now());
        booking.setUpdatedAt(LocalDateTime.now());
        return bookingRepository.save(booking);
    }

    public Optional<Booking> updateBooking(Long id, Booking bookingDetails) {
        return bookingRepository.findById(id)
                .map(booking -> {
                    booking.setCustomerId(bookingDetails.getCustomerId());
                    booking.setWorkerId(bookingDetails.getWorkerId());
                    booking.setServiceDetails(bookingDetails.getServiceDetails());
                    booking.setAddress(bookingDetails.getAddress());
                    booking.setServiceDate(bookingDetails.getServiceDate());
                    booking.setStatus(bookingDetails.getStatus());
                    booking.setEstimatedPrice(bookingDetails.getEstimatedPrice());
                    booking.setFinalPrice(bookingDetails.getFinalPrice());
                    // Payment related fields
                    booking.setPaymentStatus(bookingDetails.getPaymentStatus());
                    booking.setPaymentMethod(bookingDetails.getPaymentMethod());
                    booking.setTransactionId(bookingDetails.getTransactionId());
                    booking.setUpdatedAt(LocalDateTime.now());
                    return bookingRepository.save(booking);
                });
    }

    public boolean deleteBooking(Long id) {
        return bookingRepository.findById(id)
                .map(booking -> {
                    bookingRepository.delete(booking);
                    return true;
                })
                .orElse(false);
    }

    public List<Booking> getBookingsByCustomerId(Long customerId) {
        return bookingRepository.findByCustomerId(customerId);
    }

    public List<Booking> getBookingsByWorkerId(Long workerId) {
        return bookingRepository.findByWorkerId(workerId);
    }

    public List<Booking> getBookingsByStatus(String status) {
        return bookingRepository.findByStatus(status);
    }

    public List<Booking> getCustomerBookingsByStatus(Long customerId, String status) {
        return bookingRepository.findByCustomerIdAndStatus(customerId, status);
    }

    public List<Booking> getWorkerBookingsByStatus(Long workerId, String status) {
        return bookingRepository.findByWorkerIdAndStatus(workerId, status);
    }

    public Optional<Booking> assignWorkerToBooking(Long bookingId, Long workerId) {
        return bookingRepository.findById(bookingId)
                .map(booking -> {
                    booking.setWorkerId(workerId);
                    booking.setStatus("ASSIGNED");
                    booking.setUpdatedAt(LocalDateTime.now());
                    return bookingRepository.save(booking);
                });
    }

    public Optional<Booking> updateBookingStatus(Long bookingId, String status) {
        return bookingRepository.findById(bookingId)
                .map(booking -> {
                    booking.setStatus(status);
                    booking.setUpdatedAt(LocalDateTime.now());
                    return bookingRepository.save(booking);
                });
    }
    
    public Optional<Booking> updateBookingPaymentStatus(Long bookingId, String paymentStatus, String paymentMethod) {
        return bookingRepository.findById(bookingId)
                .map(booking -> {
                    booking.setPaymentStatus(paymentStatus);
                    booking.setPaymentMethod(paymentMethod);
                    booking.setUpdatedAt(LocalDateTime.now());
                    return bookingRepository.save(booking);
                });
    }

    public List<Worker> findSuitableWorkersForBooking(Booking booking) {
        // This is a simplified algorithm for matching workers to bookings
        // In a real implementation, this would be more complex and consider:
        // - Location proximity
        // - Price competitiveness
        // - Customer reviews and ratings
        // - Category expertise
        // - Worker availability (only active workers)
        
        List<Worker> availableWorkers = workerService.getAvailableWorkers();
        
        // Filter workers based on some criteria (simplified)
        return availableWorkers.stream()
                .filter(worker -> worker.getRating() != null && worker.getRating() >= 4.0)
                .collect(Collectors.toList());
    }
}