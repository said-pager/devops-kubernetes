// Import necessary modules
const crypto = require('crypto');

// Generate a random string
const randomString = crypto.randomBytes(16).toString('hex');

// Function to log the random string with a timestamp
function logRandomString() {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Random String: ${randomString}`);
}

// Log the random string every 5 seconds
setInterval(logRandomString, 5000);

// Initial log on startup
logRandomString();
