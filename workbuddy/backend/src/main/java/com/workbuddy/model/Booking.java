package com.workbuddy.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "bookings")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "customer_id", nullable = false)
    private Long customerId;
    
    @Column(name = "worker_id")
    private Long workerId;
    
    @Column(name = "service_details", length = 1000)
    private String serviceDetails;
    
    @Column(name = "address", length = 500)
    private String address;
    
    @Column(name = "service_date")
    private LocalDateTime serviceDate;
    
    @Column(name = "status", nullable = false)
    private String status; // PENDING, ASSIGNED, ACCEPTED, REJECTED, NEGOTIATING, CONFIRMED, COMPLETED, CANCELLED
    
    @Column(name = "estimated_price")
    private Double estimatedPrice;
    
    @Column(name = "final_price")
    private Double finalPrice;
    
    // Payment related fields
    @Column(name = "payment_status")
    private String paymentStatus; // PENDING, PROCESSING, COMPLETED, FAILED, REFUNDED
    
    @Column(name = "payment_method")
    private String paymentMethod; // UPI, ESCROW_WALLET, CREDIT_CARD
    
    @Column(name = "transaction_id")
    private String transactionId;
    
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    // Constructors
    public Booking() {}
    
    public Booking(Long customerId, String serviceDetails, String address) {
        this.customerId = customerId;
        this.serviceDetails = serviceDetails;
        this.address = address;
        this.status = "PENDING";
        this.paymentStatus = "PENDING";
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public Long getCustomerId() {
        return customerId;
    }
    
    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }
    
    public Long getWorkerId() {
        return workerId;
    }
    
    public void setWorkerId(Long workerId) {
        this.workerId = workerId;
    }
    
    public String getServiceDetails() {
        return serviceDetails;
    }
    
    public void setServiceDetails(String serviceDetails) {
        this.serviceDetails = serviceDetails;
    }
    
    public String getAddress() {
        return address;
    }
    
    public void setAddress(String address) {
        this.address = address;
    }
    
    public LocalDateTime getServiceDate() {
        return serviceDate;
    }
    
    public void setServiceDate(LocalDateTime serviceDate) {
        this.serviceDate = serviceDate;
    }
    
    public String getStatus() {
        return status;
    }
    
    public void setStatus(String status) {
        this.status = status;
    }
    
    public Double getEstimatedPrice() {
        return estimatedPrice;
    }
    
    public void setEstimatedPrice(Double estimatedPrice) {
        this.estimatedPrice = estimatedPrice;
    }
    
    public Double getFinalPrice() {
        return finalPrice;
    }
    
    public void setFinalPrice(Double finalPrice) {
        this.finalPrice = finalPrice;
    }
    
    // Payment related getters and setters
    public String getPaymentStatus() {
        return paymentStatus;
    }
    
    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }
    
    public String getPaymentMethod() {
        return paymentMethod;
    }
    
    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }
    
    public String getTransactionId() {
        return transactionId;
    }
    
    public void setTransactionId(String transactionId) {
        this.transactionId = transactionId;
    }
    
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
    
    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
    
    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
}