// Import the required modules
const http = require('http');

// Define the port from the environment variable or default to 3000
const port = process.env.PORT || 3000;

// Create the web server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello from Node.js server!\n');
});

// Start the server and log the port
server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});