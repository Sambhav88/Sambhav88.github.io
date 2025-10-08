# WorkBuddy Authentication System

## Overview
This document describes the authentication system implemented for the WorkBuddy application, which allows both customers and workers to register, login, and access their respective dashboards.

## Authentication Flow

### 1. Customer Authentication

#### Registration
- Customers can register through `customer-registration.html`
- Form collects personal information, contact details, and service preferences
- Upon submission, the data is sent to the backend API via `window.WorkBuddyAPI.registerUser()`
- Successful registration redirects to `customer-categories.html`

#### Login
- Customers can login through `customer-login.html`
- Form requires email and password
- Credentials are verified via `window.WorkBuddyAPI.loginUser()`
- Successful login stores user data in localStorage and redirects to `customer-dashboard.html`

#### Dashboard Access
- `customer-dashboard.html` checks for authenticated user in localStorage
- If not authenticated, redirects to `customer-login.html`
- Displays personalized welcome message with user's name

### 2. Worker Authentication

#### Registration
- Workers can register through `worker-registration.html`
- Form collects personal information, skills, and service area
- Upon submission, the data is sent to the backend API via `window.WorkBuddyAPI.registerWorker()`
- Successful registration redirects to `worker-login.html`

#### Login
- Workers can login through `worker-login.html`
- Form requires email and password
- Credentials are verified via `window.WorkBuddyAPI.loginUser()`
- Successful login stores user data in localStorage and redirects to `worker-dashboard.html`

#### Dashboard Access
- `worker-dashboard.html` checks for authenticated worker in localStorage
- If not authenticated, redirects to `worker-login.html`
- Displays personalized welcome message with worker's name

## Security Considerations

### Current Implementation
- User data is stored in localStorage after successful login
- Each dashboard checks for authentication status on page load
- Unauthenticated users are redirected to appropriate login pages

### Future Improvements
- Implement JWT tokens for more secure authentication
- Add session expiration and refresh mechanisms
- Implement HTTPS for secure data transmission
- Add password strength requirements
- Implement two-factor authentication (2FA)

## API Integration

The authentication system integrates with the backend API through the following functions in `api.js`:

- `registerUser(userData)` - Register a new customer
- `loginUser(credentials)` - Authenticate a user
- `registerWorker(workerData)` - Register a new worker

## File Structure

```
frontend/
├── html/
│   ├── customer-login.html
│   ├── customer-registration.html
│   ├── customer-dashboard.html
│   ├── worker-login.html
│   ├── worker-registration.html
│   └── worker-dashboard.html
├── js/
│   ├── api.js
│   └── main.js
└── css/
    └── styles.css
```

## Testing the Authentication Flow

1. Navigate to `http://localhost:3000`
2. Click on "Login" in the header
3. Select either "Customer Login" or "Worker Login"
4. Enter valid credentials (or register first if new user)
5. Upon successful login, you'll be redirected to the appropriate dashboard
6. The dashboard will display personalized content based on the logged-in user
7. Clicking "Logout" will clear the session and redirect to the home page

## Error Handling

- Invalid credentials show error messages on login pages
- Network errors are caught and displayed to the user
- Unauthenticated access to dashboard pages redirects to login pages