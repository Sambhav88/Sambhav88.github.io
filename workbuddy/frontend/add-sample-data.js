// Script to add sample data to the WorkBuddy database
// This script should be run in a browser console or as a Node.js script

const API_BASE_URL = 'http://localhost:8082/api';

// Sample services data
const sampleServices = [
    {
        name: 'House Cleaning',
        description: 'Professional cleaning services for your home including vacuuming, mopping, and sanitization.'
    },
    {
        name: 'Electrician',
        description: 'Expert electrical services including wiring, fixture installation, and troubleshooting.'
    },
    {
        name: 'Plumber',
        description: 'Reliable plumbing services for leak repairs, pipe installations, and fixture maintenance.'
    },
    {
        name: 'Carpenter',
        description: 'Skilled carpentry services for furniture repair, installation, and custom woodwork.'
    },
    {
        name: 'Pest Control',
        description: 'Effective pest elimination and prevention services for homes and businesses.'
    },
    {
        name: 'Appliance Repair',
        description: 'Professional repair services for all major household appliances.'
    },
    {
        name: 'Painting',
        description: 'Quality interior and exterior painting services for homes and offices.'
    },
    {
        name: 'Gardening',
        description: 'Lawn care, landscaping, and garden maintenance services.'
    }
];

// Sample users data
const sampleUsers = [
    {
        name: 'John Customer',
        email: 'john.customer@example.com',
        password: 'password123',
        phoneNumber: '9876543210',
        userType: 'customer'
    },
    {
        name: 'Jane Worker',
        email: 'jane.worker@example.com',
        password: 'password123',
        phoneNumber: '9876543211',
        userType: 'worker'
    }
];

// Function to add services
async function addSampleServices() {
    console.log('Adding sample services...');
    
    for (const service of sampleServices) {
        try {
            const response = await fetch(`${API_BASE_URL}/services`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(service),
            });
            
            if (response.ok) {
                const result = await response.json();
                console.log(`Added service: ${service.name}`, result);
            } else {
                console.error(`Failed to add service: ${service.name}`, response.status);
            }
        } catch (error) {
            console.error(`Error adding service: ${service.name}`, error);
        }
    }
}

// Function to add users
async function addSampleUsers() {
    console.log('Adding sample users...');
    
    for (const user of sampleUsers) {
        try {
            const response = await fetch(`${API_BASE_URL}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            
            if (response.ok) {
                const result = await response.json();
                console.log(`Added user: ${user.name}`, result);
            } else {
                console.error(`Failed to add user: ${user.name}`, response.status);
            }
        } catch (error) {
            console.error(`Error adding user: ${user.name}`, error);
        }
    }
}

// Run the functions
async function addAllSampleData() {
    await addSampleServices();
    await addSampleUsers();
    console.log('Sample data addition complete!');
}

// Execute the script
addAllSampleData();