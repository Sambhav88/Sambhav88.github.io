# Razorpay Integration Guide

This document provides instructions on how to integrate Razorpay payment gateway into the WorkBuddy application.

## Prerequisites

1. Razorpay account (https://razorpay.com/)
2. Razorpay API keys (Key ID and Key Secret)
3. Maven for building the Java backend

## Backend Integration

### 1. Dependencies

The Razorpay Java SDK has been added to the `pom.xml` file:

```xml
<dependency>
    <groupId>com.razorpay</groupId>
    <artifactId>razorpay-java</artifactId>
    <version>1.4.3</version>
</dependency>
```

### 2. Configuration

Update the `application.properties` file with your Razorpay credentials:

```properties
# Razorpay Configuration
razorpay.key.id=your_razorpay_key_id
razorpay.key.secret=your_razorpay_key_secret
```

### 3. Configuration Class

The `RazorpayConfig.java` class creates a bean for the Razorpay client:

```java
@Configuration
public class RazorpayConfig {
    @Value("${razorpay.key.id}")
    private String razorpayKeyId;

    @Value("${razorpay.key.secret}")
    private String razorpayKeySecret;

    @Bean
    public RazorpayClient razorpayClient() throws Exception {
        return new RazorpayClient(razorpayKeyId, razorpayKeySecret);
    }
}
```

### 4. Service Layer Integration

The `PaymentService.java` has been updated with Razorpay integration methods:

- `createRazorpayOrder()`: Creates a Razorpay order
- `verifyPayment()`: Verifies the payment signature

### 5. Controller Layer

A new `RazorpayController.java` has been created with endpoints:

- `POST /api/razorpay/create-order`: Creates a Razorpay order
- `POST /api/razorpay/verify-payment`: Verifies a Razorpay payment

## Frontend Integration

### 1. Razorpay SDK

The frontend automatically loads the Razorpay SDK from their CDN:

```html
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
```

### 2. Payment Flow

The payment flow in `booking-confirmation.html` has been updated:

1. When Credit Card payment method is selected, Razorpay is used
2. For other payment methods, the existing flow is used
3. The `initiateRazorpayPayment()` function handles the Razorpay checkout
4. The `verifyRazorpayPayment()` function verifies the payment

### 3. Configuration

Update the Razorpay key in `booking-confirmation.html`:

```javascript
const options = {
    key: 'rzp_test_your_key_here', // Replace with your Razorpay key
    // ... other options
};
```

## API Endpoints

### Create Razorpay Order
```
POST /api/razorpay/create-order
Content-Type: application/json

{
    "amount": 1500,
    "currency": "INR",
    "receipt": "receipt_123",
    "bookingId": 1,
    "customerName": "John Doe",
    "customerEmail": "john@example.com",
    "customerPhone": "9876543210"
}
```

Response:
```json
{
    "success": true,
    "orderId": "order_xyz",
    "amount": 150000,
    "currency": "INR",
    "receipt": "receipt_123"
}
```

### Verify Razorpay Payment
```
POST /api/razorpay/verify-payment
Content-Type: application/json

{
    "razorpayPaymentId": "pay_xyz",
    "razorpayOrderId": "order_xyz",
    "razorpaySignature": "signature_xyz",
    "bookingId": 1
}
```

Response:
```json
{
    "success": true,
    "message": "Payment verified successfully"
}
```

## Testing

### Test Keys

Use Razorpay's test keys for development:
- Key ID: `rzp_test_...`
- Key Secret: `rzp_test_...`

### Test Cards

Razorpay provides test cards for different scenarios:
- Successful payment: 4111 1111 1111 1111
- Failed payment: 4000 0000 0000 0002

## Security Considerations

1. Never expose your Razorpay Key Secret in frontend code
2. Always verify payments on the server side
3. Use HTTPS in production
4. Store sensitive data securely

## Error Handling

The integration includes proper error handling for:
- Network errors
- API errors
- Payment verification failures
- Invalid responses

## Customization

You can customize the Razorpay checkout:
- Brand name and logo
- Theme colors
- Prefill customer information
- Custom notes

## Troubleshooting

### Common Issues

1. **CORS errors**: Ensure the backend has proper CORS configuration
2. **Invalid key**: Verify your Razorpay keys are correct
3. **Amount mismatch**: Ensure amounts are in paise (multiply by 100)
4. **Signature verification failed**: Check your Key Secret

### Logs

Check the backend logs for detailed error information.

## Production Deployment

1. Replace test keys with live keys
2. Ensure HTTPS is configured
3. Test all payment scenarios
4. Monitor transactions