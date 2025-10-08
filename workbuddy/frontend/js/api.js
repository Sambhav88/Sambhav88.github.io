// API functions for WorkBuddy

const API_BASE_URL = 'http://localhost:8082/api';

// User API functions
async function registerUser(userData) {
    try {
        const response = await fetch(`${API_BASE_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}

async function loginUser(credentials) {
    try {
        const response = await fetch(`${API_BASE_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
}

// Worker API functions
async function registerWorker(workerData) {
    try {
        const response = await fetch(`${API_BASE_URL}/workers/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(workerData),
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error registering worker:', error);
        throw error;
    }
}

async function getWorkerById(workerId) {
    try {
        const response = await fetch(`${API_BASE_URL}/workers/${workerId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching worker:', error);
        throw error;
    }
}

async function updateWorkerAvailability(workerId, isAvailable) {
    try {
        const response = await fetch(`${API_BASE_URL}/workers/${workerId}/availability`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ available: isAvailable }),
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error updating worker availability:', error);
        throw error;
    }
}

// Get workers by service
async function getWorkersByService(serviceName) {
    try {
        const response = await fetch(`${API_BASE_URL}/workers/service/${encodeURIComponent(serviceName)}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching workers by service:', error);
        throw error;
    }
}

// Service API functions
async function getAllServices() {
    try {
        const response = await fetch(`${API_BASE_URL}/services`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching services:', error);
        throw error;
    }
}

async function getServiceById(serviceId) {
    try {
        const response = await fetch(`${API_BASE_URL}/services/${serviceId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching service:', error);
        throw error;
    }
}

// Booking API functions
async function createBooking(bookingData) {
    try {
        const response = await fetch(`${API_BASE_URL}/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData),
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error creating booking:', error);
        throw error;
    }
}

async function getBookingsByUserId(userId) {
    try {
        const response = await fetch(`${API_BASE_URL}/bookings/user/${userId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching bookings:', error);
        throw error;
    }
}

async function getBookingById(bookingId) {
    try {
        const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching booking:', error);
        throw error;
    }
}

async function updateBooking(bookingId, bookingData) {
    try {
        const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData),
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error updating booking:', error);
        throw error;
    }
}

// Negotiation API functions
async function sendPriceProposal(bookingId, proposalData) {
    try {
        const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}/proposal`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(proposalData),
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error sending price proposal:', error);
        throw error;
    }
}

async function acceptPriceProposal(bookingId, proposalId) {
    try {
        const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}/proposal/${proposalId}/accept`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error accepting price proposal:', error);
        throw error;
    }
}

async function rejectPriceProposal(bookingId, proposalId) {
    try {
        const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}/proposal/${proposalId}/reject`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error rejecting price proposal:', error);
        throw error;
    }
}

async function getActiveNegotiations(customerId) {
    try {
        const response = await fetch(`${API_BASE_URL}/customers/${customerId}/negotiations`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching active negotiations:', error);
        throw error;
    }
}

async function sendMessage(bookingId, messageData) {
    try {
        const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageData),
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
}

async function getMessages(bookingId) {
    try {
        const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}/messages`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching messages:', error);
        throw error;
    }
}

// Payment API functions
async function processPayment(bookingId, amount, paymentMethod) {
    try {
        const response = await fetch(`${API_BASE_URL}/payments/process/${bookingId}?amount=${amount}&paymentMethod=${paymentMethod}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error processing payment:', error);
        throw error;
    }
}

async function getPaymentById(paymentId) {
    try {
        const response = await fetch(`${API_BASE_URL}/payments/${paymentId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching payment:', error);
        throw error;
    }
}

async function getPaymentsByBookingId(bookingId) {
    try {
        const response = await fetch(`${API_BASE_URL}/payments/booking/${bookingId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching payments:', error);
        throw error;
    }
}

// Razorpay API functions
async function createRazorpayOrder(orderData) {
    try {
        const response = await fetch(`${API_BASE_URL}/razorpay/create-order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error creating Razorpay order:', error);
        throw error;
    }
}

async function verifyRazorpayPayment(verificationData) {
    try {
        const response = await fetch(`${API_BASE_URL}/razorpay/verify-payment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(verificationData),
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error verifying Razorpay payment:', error);
        throw error;
    }
}

// Export functions
window.WorkBuddyAPI = {
    registerUser,
    loginUser,
    registerWorker,
    getWorkerById,
    updateWorkerAvailability,
    getWorkersByService,
    getAllServices,
    getServiceById,
    createBooking,
    getBookingsByUserId,
    getBookingById,
    updateBooking,
    sendPriceProposal,
    acceptPriceProposal,
    rejectPriceProposal,
    getActiveNegotiations,
    sendMessage,
    getMessages,
    processPayment,
    getPaymentById,
    getPaymentsByBookingId,
    createRazorpayOrder,
    verifyRazorpayPayment
};