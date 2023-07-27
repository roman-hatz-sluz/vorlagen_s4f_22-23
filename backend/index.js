// Import the Express framework module
const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root URL ('/') using the HTTP GET method
// When a user sends a GET request to the root URL, this function will be executed
app.get('/', (req, res) => {
  // Send the response to the client with the message "Hello, World!"
  res.send('Hello S4F!');
});

// Start the server and make it listen on a specific port (e.g., 3001)
const PORT = 3001;
app.listen(PORT, () => {
  // After the server starts listening, this callback function will be executed
  console.log(`Server is running on port ${PORT}. Open http://localhost:${PORT}/ in your browser.`);
});