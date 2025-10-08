// Mock server for testing payment functionality

const http = require('http');
const url = require('url');

// Create a simple HTTP server
const server = http.createServer((req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }
    
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method;
    
    // Mock payment processing endpoint
    if (path.startsWith('/api/payments/process/') && method === 'POST') {
        // Extract booking ID from URL
        const bookingId = path.split('/')[4];
        const { amount, paymentMethod } = parsedUrl.query;
        
        // Create a mock payment response
        const mockPayment = {
            id: Math.floor(Math.random() * 1000),
            bookingId: parseInt(bookingId),
            amount: parseFloat(amount),
            paymentMethod: paymentMethod,
            status: 'COMPLETED',
            transactionId: 'TXN-' + Math.random().toString(36).substring(2, 10).toUpperCase(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        // Simulate processing delay
        setTimeout(() => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(mockPayment));
        }, 1000);
        return;
    }
    
    // Mock get payment by ID endpoint
    if (path.startsWith('/api/payments/') && method === 'GET') {
        const paymentId = path.split('/')[3];
        
        // Create a mock payment response
        const mockPayment = {
            id: parseInt(paymentId),
            bookingId: 1,
            amount: 1500,
            paymentMethod: 'UPI',
            status: 'COMPLETED',
            transactionId: 'TXN-' + Math.random().toString(36).substring(2, 10).toUpperCase(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(mockPayment));
        return;
    }
    
    // Mock get all payments endpoint
    if (path === '/api/payments' && method === 'GET') {
        const mockPayments = [
            {
                id: 1,
                bookingId: 1,
                amount: 1500,
                paymentMethod: 'UPI',
                status: 'COMPLETED',
                transactionId: 'TXN-ABC123',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            },
            {
                id: 2,
                bookingId: 2,
                amount: 800,
                paymentMethod: 'ESCROW_WALLET',
                status: 'COMPLETED',
                transactionId: 'TXN-DEF456',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            }
        ];
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(mockPayments));
        return;
    }
    
    // Default response for unknown endpoints
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Endpoint not found' }));
});

// Start the server on port 8080
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Mock server running on http://localhost:${PORT}`);
    console.log('Available endpoints:');
    console.log('  GET  /api/payments');
    console.log('  GET  /api/payments/:id');
    console.log('  POST /api/payments/process/:bookingId?amount=:amount&paymentMethod=:method');
});