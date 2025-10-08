package com.workbuddy.dto;

public class RazorpayOrderRequest {
    private Double amount;
    private String currency;
    private String receipt;
    private Long bookingId;
    private String customerName;
    private String customerEmail;
    private String customerPhone;

    // Constructors
    public RazorpayOrderRequest() {}

    public RazorpayOrderRequest(Double amount, String currency, String receipt, Long bookingId, 
                               String customerName, String customerEmail, String customerPhone) {
        this.amount = amount;
        this.currency = currency;
        this.receipt = receipt;
        this.bookingId = bookingId;
        this.customerName = customerName;
        this.customerEmail = customerEmail;
        this.customerPhone = customerPhone;
    }

    // Getters and Setters
    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getReceipt() {
        return receipt;
    }

    public void setReceipt(String receipt) {
        this.receipt = receipt;
    }

    public Long getBookingId() {
        return bookingId;
    }

    public void setBookingId(Long bookingId) {
        this.bookingId = bookingId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }

    public String getCustomerPhone() {
        return customerPhone;
    }

    public void setCustomerPhone(String customerPhone) {
        this.customerPhone = customerPhone;
    }
}