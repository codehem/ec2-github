// Import the express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port number
const port = 3000;

// Define a route handler for the default route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});