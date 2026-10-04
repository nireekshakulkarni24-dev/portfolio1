@echo off
title Nireeksha Prakash Kulkarni - Portfolio Server
color 0b

echo =========================================================================
echo       NIREEKSHA PRAKASH KULKARNI - PERSONAL PORTFOLIO DEMO
echo =========================================================================
echo.
echo Starting local portfolio preview...
echo Current Directory: %~dp0
echo.

cd /d "%~dp0"

:: 1. Check Python
where python >nul 2>nul
if %errorlevel% equ 0 (
    echo [OK] Python detected! Launching HTTP server on http://localhost:3000 ...
    echo Opening browser in 2 seconds...
    start "" http://localhost:3000
    python -m http.server 3000
    goto End
)

:: 2. Check Node.js
where node >nul 2>nul
if %errorlevel% equ 0 (
    echo [OK] Node.js detected! Starting built-in lightweight server on port 3000 ...
    start "" http://localhost:3000
    node -e "const http = require('http'); const fs = require('fs'); const path = require('path'); const mime = {'.html':'text/html','.css':'text/css','.js':'application/javascript','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png','.pdf':'application/pdf'}; http.createServer((req, res) => { let reqPath = req.url === '/' ? '/index.html' : req.url.split('?')[0]; let filePath = path.join(__dirname, reqPath); fs.readFile(filePath, (err, data) => { if(err) { res.writeHead(404); res.end('File Not Found'); return; } let ext = path.extname(filePath); res.writeHead(200, {'Content-Type': mime[ext] || 'application/octet-stream'}); res.end(data); }); }).listen(3000, () => console.log('Portfolio serving at http://localhost:3000'));"
    goto End
)

:: 3. Direct Browser Fallback
echo [INFO] Python and Node.js not detected in system PATH.
echo [INFO] Falling back to opening portfolio directly in your default browser...
start "" "%~dp0index.html"
echo.
echo Portfolio opened directly via browser!
echo To run with a local web server, install Python 3 or Node.js.
echo.
pause

:End
pause
