@echo off
cd /d "%~dp0\.."
for /f "tokens=5" %%p in ('netstat -ano ^| findstr "127.0.0.1:8090" ^| findstr LISTENING') do taskkill /PID %%p /F
call npm run build || exit /b 1
start "portfolio-pc" /min cmd /c npm run start:pc
