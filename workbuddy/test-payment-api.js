// Simple test script to verify payment API endpoints

async function testPaymentAPI() {
    const baseUrl = 'http://localhost:8080/api';
    
    try {
        // Test 1: Get all payments
        console.log('Testing GET /payments');
        const paymentsResponse = await fetch(`${baseUrl}/payments`);
        const payments = await paymentsResponse.json();
        console.log('All payments:', payments);
        
        // Test 2: Process a payment
        console.log('Testing POST /payments/process/{bookingId}');
        const processResponse = await fetch(`${baseUrl}/payments/process/1?amount=1500&paymentMethod=UPI`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (processResponse.ok) {
            const payment = await processResponse.json();
            console.log('Processed payment:', payment);
        } else {
            console.log('Failed to process payment:', processResponse.status);
        }
        
        // Test 3: Get payment by ID
        console.log('Testing GET /payments/{id}');
        const paymentResponse = await fetch(`${baseUrl}/payments/1`);
        if (paymentResponse.ok) {
            const payment = await paymentResponse.json();
            console.log('Payment by ID:', payment);
        } else {
            console.log('Failed to get payment by ID:', paymentResponse.status);
        }
        
    } catch (error) {
        console.error('Error testing payment API:', error);
    }
}

// Run the test
testPaymentAPI();