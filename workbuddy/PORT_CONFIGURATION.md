# Port Configuration for WorkBuddy Project

This document outlines the port configuration for the WorkBuddy project after the recent changes.

## Current Port Configuration

| Component | Port | URL |
|-----------|------|-----|
| Frontend Server | 3000 | http://localhost:3000 |
| Backend Server | 8080 | http://localhost:8080 |

## Frontend Server Options

The WorkBuddy frontend can be served using either of two methods:

### Option 1: Python HTTP Server (Recommended)
- Runs from the `frontend` directory
- Automatically serves [index.html](file://d:\Assignments\SIH3\workbuddy\frontend\index.html) which redirects to [html/home.html](file://d:\Assignments\SIH3\workbuddy\frontend\html\home.html)
- Started with: `python -m http.server 3000`

### Option 2: Node.js Server
- Custom Node.js server that serves files from the frontend directory
- Directly serves [html/home.html](file://d:\Assignments\SIH3\workbuddy\frontend\html\home.html) as the default page
- Started with: `node server.js`

## Changes Made

### 1. Frontend Server Configuration
- Updated [server.js](file://d:\Assignments\SIH3\workbuddy\server.js) to properly serve files from the frontend directory
- Modified [start-frontend.bat](file://d:\Assignments\SIH3\workbuddy\start-frontend.bat) to start the Python server from the frontend directory
- Created [frontend/index.html](file://d:\Assignments\SIH3\workbuddy\frontend\index.html) to redirect to home.html
- Updated [start-all.bat](file://d:\Assignments\SIH3\workbuddy\start-all.bat) to reflect the new frontend configuration
- Created [start-frontend-node.bat](file://d:\Assignments\SIH3\workbuddy\start-frontend-node.bat) for the Node.js server option

### 2. Backend Server Configuration
- Backend already configured to run on port 8080 in [application.properties](file://d:\Assignments\SIH3\workbuddy\backend\src\resources\application.properties)
- CORS annotations in all controllers already set to allow requests from http://localhost:3000

### 3. API Configuration
- [api.js](file://d:\Assignments\SIH3\workbuddy\frontend\js\api.js) already correctly configured to make API calls to http://localhost:8080/api

## Startup Scripts

### Starting the Frontend Server (Python - Recommended)
```
cd workbuddy/frontend
python -m http.server 3000
```

Or run [start-frontend.bat](file://d:\Assignments\SIH3\workbuddy\start-frontend.bat)

### Starting the Frontend Server (Node.js)
```
cd workbuddy
node server.js
```

Or run [start-frontend-node.bat](file://d:\Assignments\SIH3\workbuddy\start-frontend-node.bat)

### Starting the Backend Server
```
cd workbuddy/backend
mvn spring-boot:run
```

Or run [start-backend.bat](file://d:\Assignments\SIH3\workbuddy\start-backend.bat)

### Starting Both Servers
Run [start-all.bat](file://d:\Assignments\SIH3\workbuddy\start-all.bat) to start both servers simultaneously

## Accessing the Application

After starting both servers:
- Frontend: http://localhost:3000 (will automatically redirect to home.html)
- Backend API: http://localhost:8080/api

## Verification

To verify the servers are running correctly:
1. Frontend: Navigate to http://localhost:3000 and you should see the WorkBuddy home page
2. Backend: Navigate to http://localhost:8080/api and you should see the API documentation or a response from the backend

## Troubleshooting

If you encounter issues:
1. Ensure no other applications are using ports 3000 or 8080
2. Check that all startup scripts are pointing to the correct directories
3. Verify that the CORS configuration in the backend allows requests from http://localhost:3000
4. Confirm that the API calls in the frontend are pointing to http://localhost:8080/api
5. Make sure you're running the frontend server from the correct directory (workbuddy/frontend for Python server)