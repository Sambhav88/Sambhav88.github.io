const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Set the base directory to frontend
const BASE_DIR = path.join(__dirname, 'frontend');

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  
  let filePath = req.url;
  
  // Handle root path - serve index.html
  if (filePath === '/' || filePath === '/index.html') {
    filePath = '/index.html';
  }
  
  // Construct full file path
  filePath = path.join(BASE_DIR, ...filePath.split('/'));
  
  // Resolve the full path
  filePath = path.resolve(filePath);
  
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';
  
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // File not found
        fs.readFile(path.join(BASE_DIR, 'html', '404.html'), (err, content404) => {
          if (err) {
            // No 404 page, send plain text
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found', 'utf-8');
          } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(content404, 'utf-8');
          }
        });
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`WorkBuddy frontend server running at http://localhost:${PORT}/`);
  console.log('Press Ctrl+C to stop the server');
});