@echo off
echo Starting WorkBuddy Application...
echo.

echo Starting Backend Server...
start cmd /k "cd /d D:\Assignments\SIH3\workbuddy\backend && echo Starting Backend Server... && mvn spring-boot:run"

echo.
echo Starting Frontend Server...
start cmd /k "cd /d D:\Assignments\SIH3\workbuddy\frontend && echo Starting Frontend Server... && python -m http.server 3000"

echo.
echo Servers started successfully!
echo Frontend: http://localhost:3000
echo Backend: http://localhost:8080
echo.
echo Note: Frontend will automatically redirect to home.html
echo.
pause