// Import the Express framework module
const express = require("express");
// Import the fs library for disk IO
const fs = require("fs");
// Import the Node.js path module
const path = require("path");

// Create an Express application
const app = express();

// Serve static files from the "dist" folder
app.use(express.static(path.join(__dirname + "/../", "dist")));

// Define a route for the root URL ('/') using the HTTP GET method
// When a user sends a GET request to the root URL, this function will be executed
app.get("/", (req, res) => {
  // Send the response to the client with the message "Hello, World!"
  html = fs.readFileSync(__dirname + "/../" + "/dist/index.html", "utf8");
  res.send(html);
});

// Start the server and make it listen on a specific port (e.g., 3001)
const PORT = 3001;
app.listen(PORT, () => {
  // After the server starts listening, this callback function will be executed
  console.log(
    `Server is running on port ${PORT}. Open http://localhost:${PORT}/ in your browser.`
  );
});
