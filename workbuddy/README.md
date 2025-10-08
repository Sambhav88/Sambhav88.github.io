# WorkBuddy - Connecting Skilled Workers with Customers

WorkBuddy is a platform that connects blue-collar workers (plumbers, electricians, painters, masons, drivers, cleaners, etc.) with customers who need their services. It's like UrbanClap/Urban Company but specifically focused on blue-collar workers, making it simple, affordable, and worker-friendly.

## Features Implemented

### 1. Worker Active/Inactive Status
- Workers can toggle their availability status using a switch in their dashboard
- Only active workers will be assigned to customer requests
- Visual indicators show current availability status
- Notifications inform workers when they change their status

### 2. Customer Registration/Login Workflow
- After registration or login, customers are automatically redirected to the categories page
- Simple registration process with form validation
- Tabbed interface for easy switching between login and registration

### 3. Service Categories with Images
- Four main categories with visual representations:
  - Home Cleaning & Care (🏠)
  - Repairs & Maintenance (🔧)
  - Society & Daily Services (🏘)
  - Miscellaneous Services (🛠)
- Each category has multiple subcategories
- Popular services are highlighted with badges
- Enhanced visual design with gradient backgrounds

### 4. Booking Process
- Customers select services from categories page
- Booking form collects service details (address, date, time, description)
- Intelligent algorithm matches customers with workers based on:
  - Location proximity
  - Price competitiveness
  - Customer reviews and ratings
  - Category expertise
  - Worker availability (only active workers considered)

### 5. Worker Assignment and Response System
- Simulated algorithm matching process
- Workers receive notifications with job details
- Three response options:
  - Accept: Confirm booking
  - Reject: System assigns next available worker
  - Negotiate: Chat interface for price discussion

### 6. Price Negotiation
- Chat interface for customers and workers to discuss pricing
- Real-time messaging system
- Option to confirm negotiated price or cancel negotiation

### 7. Booking Confirmation
- Final booking confirmation with all details
- Worker contact information
- Next steps information
- Booking ID and payment status

### 8. Multi-Language Support
- Support for three languages: English, Hindi, and Marathi
- Language selector in the header of all pages
- Persistent language selection using localStorage
- Automatic translation of all UI elements
- Consistent language experience across the entire platform

### 9. Payment Processing
- Multiple payment options: UPI, Escrow Wallet, and Credit Card
- Secure payment processing with transaction tracking
- Payment status visible in booking details
- Detailed payment summary with transaction IDs
- Integration-ready payment gateway simulation

## File Structure

```
workbuddy/
├── frontend/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── main.js
│   │   └── translations.js
│   └── html/
│       ├── home.html
│       ├── customer-registration.html
│       ├── worker-registration.html
│       ├── customer-categories.html
│       ├── booking-form.html
│       ├── booking-confirmation.html
│       ├── booking-success.html
│       ├── worker-dashboard.html
│       ├── customer-dashboard.html
│       ├── add-service.html
│       └── book-service.html
└── backend/
    └── (Spring Boot structure)
```

## Key Pages

### Home Page (home.html)
- Introduction to WorkBuddy
- Options to join as worker or customer
- How it works section
- About section explaining the platform
- Language selector in header

### Worker Dashboard (worker-dashboard.html)
- Availability status toggle (Active/Inactive)
- Job notifications and management
- Earnings tracking
- Account management
- Multi-language support

### Customer Categories (customer-categories.html)
- Visual category selection with images
- Subcategory checkboxes
- Selected services summary
- Book button that activates when services are selected

### Booking Form (booking-form.html)
- Service address input
- Date and time selection
- Service description fields
- Pricing information based on algorithm

### Booking Confirmation (booking-confirmation.html)
- Worker assignment simulation
- Worker details display
- Accept/Reject/Negotiate options
- Chat interface for price negotiation
- Payment method selection and processing

### Booking Success (booking-success.html)
- Final booking confirmation
- Worker contact information
- Next steps guidance
- Payment details and transaction information

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Spring Boot (Java)
- **Database**: MySQL
- **Authentication**: (To be implemented)

## API Endpoints

### Worker Endpoints
- `GET /api/workers` - Get all workers
- `GET /api/workers/{id}` - Get worker by ID
- `POST /api/workers` - Create a new worker
- `PUT /api/workers/{id}` - Update worker details
- `DELETE /api/workers/{id}` - Delete a worker
- `PUT /api/workers/{id}/availability` - Update worker availability status
- `GET /api/workers/available` - Get all available workers

### Booking Endpoints
- `GET /api/bookings` - Get all bookings
- `GET /api/bookings/{id}` - Get booking by ID
- `POST /api/bookings` - Create a new booking
- `PUT /api/bookings/{id}` - Update booking details
- `DELETE /api/bookings/{id}` - Delete a booking
- `GET /api/bookings/customer/{customerId}` - Get bookings by customer ID
- `GET /api/bookings/worker/{workerId}` - Get bookings by worker ID
- `PUT /api/bookings/{id}/assign/{workerId}` - Assign worker to booking
- `PUT /api/bookings/{id}/status?status={status}` - Update booking status

### Payment Endpoints
- `GET /api/payments` - Get all payments
- `GET /api/payments/{id}` - Get payment by ID
- `POST /api/payments` - Create a new payment
- `PUT /api/payments/{id}` - Update payment details
- `DELETE /api/payments/{id}` - Delete a payment
- `GET /api/payments/booking/{bookingId}` - Get payments by booking ID
- `POST /api/payments/process/{bookingId}` - Process a payment
- `GET /api/payments/transaction/{transactionId}` - Get payment by transaction ID

## How to Run

### Frontend
1. Open `frontend/html/home.html` in a web browser
2. Navigate through the customer or worker workflow
3. Use the language selector in the header to switch between English, Hindi, and Marathi

### Backend
1. Configure database connection in `application.properties`
2. Run the Spring Boot application
3. The API will be available at `http://localhost:8080`

## Future Enhancements

- Database integration for persistent data storage
- User authentication and authorization
- Real-time notifications
- Payment integration with real payment gateways (Razorpay, Stripe, etc.)
- Mobile application development
- Admin dashboard for platform management
- Advanced analytics and reporting

## Razorpay Integration

The WorkBuddy application now includes integration with Razorpay for processing credit card payments. The integration includes:

- Backend API endpoints for creating orders and verifying payments
- Frontend checkout flow using Razorpay's JavaScript SDK
- Secure payment processing with signature verification
- Support for test and live environments

For detailed information on how to configure and use the Razorpay integration, see [RAZORPAY_INTEGRATION.md](RAZORPAY_INTEGRATION.md).

# WorkBuddy Application

## Overview
WorkBuddy is a platform that connects blue-collar workers with customers who need their services.

## Prerequisites
- Java 17 or higher
- Maven 3.6 or higher
- Python 3.6 or higher (for running the frontend server)
- MySQL database

## Running the Application

### Method 1: Using Batch Files (Windows)

1. Double-click on `start-all.bat` to start both frontend and backend servers
2. Access the application at http://localhost:8000
3. The backend API will be available at http://localhost:8080

### Method 2: Manual Start

#### Starting the Backend:
```
# WorkBuddy - Connecting Skilled Workers with Customers

WorkBuddy is a platform that connects blue-collar workers (plumbers, electricians, painters, masons, drivers, cleaners, etc.) with customers who need their services. It's like UrbanClap/Urban Company but specifically focused on blue-collar workers, making it simple, affordable, and worker-friendly.

## Features Implemented

### 1. Worker Active/Inactive Status
- Workers can toggle their availability status using a switch in their dashboard
- Only active workers will be assigned to customer requests
- Visual indicators show current availability status
- Notifications inform workers when they change their status

### 2. Customer Registration/Login Workflow
- After registration or login, customers are automatically redirected to the categories page
- Simple registration process with form validation
- Tabbed interface for easy switching between login and registration

### 3. Service Categories with Images
- Four main categories with visual representations:
  - Home Cleaning & Care (🏠)
  - Repairs & Maintenance (🔧)
  - Society & Daily Services (🏘)
  - Miscellaneous Services (🛠)
- Each category has multiple subcategories
- Popular services are highlighted with badges
- Enhanced visual design with gradient backgrounds

### 4. Booking Process
- Customers select services from categories page
- Booking form collects service details (address, date, time, description)
- Intelligent algorithm matches customers with workers based on:
  - Location proximity
  - Price competitiveness
  - Customer reviews and ratings
  - Category expertise
  - Worker availability (only active workers considered)

### 5. Worker Assignment and Response System
- Simulated algorithm matching process
- Workers receive notifications with job details
- Three response options:
  - Accept: Confirm booking
  - Reject: System assigns next available worker
  - Negotiate: Chat interface for price discussion

### 6. Price Negotiation
- Chat interface for customers and workers to discuss pricing
- Real-time messaging system
- Option to confirm negotiated price or cancel negotiation

### 7. Booking Confirmation
- Final booking confirmation with all details
- Worker contact information
- Next steps information
- Booking ID and payment status

### 8. Multi-Language Support
- Support for three languages: English, Hindi, and Marathi
- Language selector in the header of all pages
- Persistent language selection using localStorage
- Automatic translation of all UI elements
- Consistent language experience across the entire platform

### 9. Payment Processing
- Multiple payment options: UPI, Escrow Wallet, and Credit Card
- Secure payment processing with transaction tracking
- Payment status visible in booking details
- Detailed payment summary with transaction IDs
- Integration-ready payment gateway simulation

## File Structure

```
workbuddy/
├── frontend/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── main.js
│   │   └── translations.js
│   └── html/
│       ├── home.html
│       ├── customer-registration.html
│       ├── worker-registration.html
│       ├── customer-categories.html
│       ├── booking-form.html
│       ├── booking-confirmation.html
│       ├── booking-success.html
│       ├── worker-dashboard.html
│       ├── customer-dashboard.html
│       ├── add-service.html
│       └── book-service.html
└── backend/
    └── (Spring Boot structure)
```

## Key Pages

### Home Page (home.html)
- Introduction to WorkBuddy
- Options to join as worker or customer
- How it works section
- About section explaining the platform
- Language selector in header

### Worker Dashboard (worker-dashboard.html)
- Availability status toggle (Active/Inactive)
- Job notifications and management
- Earnings tracking
- Account management
- Multi-language support

### Customer Categories (customer-categories.html)
- Visual category selection with images
- Subcategory checkboxes
- Selected services summary
- Book button that activates when services are selected

### Booking Form (booking-form.html)
- Service address input
- Date and time selection
- Service description fields
- Pricing information based on algorithm

### Booking Confirmation (booking-confirmation.html)
- Worker assignment simulation
- Worker details display
- Accept/Reject/Negotiate options
- Chat interface for price negotiation
- Payment method selection and processing

### Booking Success (booking-success.html)
- Final booking confirmation
- Worker contact information
- Next steps guidance
- Payment details and transaction information

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Spring Boot (Java)
- **Database**: MySQL
- **Authentication**: (To be implemented)

## API Endpoints

### Worker Endpoints
- `GET /api/workers` - Get all workers
- `GET /api/workers/{id}` - Get worker by ID
- `POST /api/workers` - Create a new worker
- `PUT /api/workers/{id}` - Update worker details
- `DELETE /api/workers/{id}` - Delete a worker
- `PUT /api/workers/{id}/availability` - Update worker availability status
- `GET /api/workers/available` - Get all available workers

### Booking Endpoints
- `GET /api/bookings` - Get all bookings
- `GET /api/bookings/{id}` - Get booking by ID
- `POST /api/bookings` - Create a new booking
- `PUT /api/bookings/{id}` - Update booking details
- `DELETE /api/bookings/{id}` - Delete a booking
- `GET /api/bookings/customer/{customerId}` - Get bookings by customer ID
- `GET /api/bookings/worker/{workerId}` - Get bookings by worker ID
- `PUT /api/bookings/{id}/assign/{workerId}` - Assign worker to booking
- `PUT /api/bookings/{id}/status?status={status}` - Update booking status

### Payment Endpoints
- `GET /api/payments` - Get all payments
- `GET /api/payments/{id}` - Get payment by ID
- `POST /api/payments` - Create a new payment
- `PUT /api/payments/{id}` - Update payment details
- `DELETE /api/payments/{id}` - Delete a payment
- `GET /api/payments/booking/{bookingId}` - Get payments by booking ID
- `POST /api/payments/process/{bookingId}` - Process a payment
- `GET /api/payments/transaction/{transactionId}` - Get payment by transaction ID

## How to Run

### Frontend
1. Open `frontend/html/home.html` in a web browser
2. Navigate through the customer or worker workflow
3. Use the language selector in the header to switch between English, Hindi, and Marathi

### Backend
1. Configure database connection in `application.properties`
2. Run the Spring Boot application
3. The API will be available at `http://localhost:8080`

## Future Enhancements

- Database integration for persistent data storage
- User authentication and authorization
- Real-time notifications
- Payment integration with real payment gateways (Razorpay, Stripe, etc.)
- Mobile application development
- Admin dashboard for platform management
- Advanced analytics and reporting

## Razorpay Integration

The WorkBuddy application now includes integration with Razorpay for processing credit card payments. The integration includes:

- Backend API endpoints for creating orders and verifying payments
- Frontend checkout flow using Razorpay's JavaScript SDK
- Secure payment processing with signature verification
- Support for test and live environments

For detailed information on how to configure and use the Razorpay integration, see [RAZORPAY_INTEGRATION.md](RAZORPAY_INTEGRATION.md).

# WorkBuddy Application

## Overview
WorkBuddy is a platform that connects blue-collar workers with customers who need their services.

## Prerequisites
- Java 17 or higher
- Maven 3.6 or higher
- Python 3.6 or higher (for running the frontend server)
- MySQL database

## Running the Application

### Method 1: Using Batch Files (Windows)

1. Double-click on `start-all.bat` to start both frontend and backend servers
2. Access the application at http://localhost:8000
3. The backend API will be available at http://localhost:8080

### Method 2: Manual Start

#### Starting the Backend:
