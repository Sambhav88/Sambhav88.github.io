package com.workbuddy.config;

import com.razorpay.RazorpayClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RazorpayConfig {

    @Value("${razorpay.key.id:}")
    private String razorpayKeyId;

    @Value("${razorpay.key.secret:}")
    private String razorpayKeySecret;

    @Bean
    public RazorpayClient razorpayClient() throws Exception {
        // Only create the Razorpay client if both key ID and secret are provided
        if (razorpayKeyId != null && !razorpayKeyId.isEmpty() && 
            razorpayKeySecret != null && !razorpayKeySecret.isEmpty()) {
            return new RazorpayClient(razorpayKeyId, razorpayKeySecret);
        }
        // Return null or throw a custom exception if needed
        return null;
    }
}