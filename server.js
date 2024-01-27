// Import the Express module
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, this is your API route!' });
});

// Start the server on a specific port (e.g., 3000)
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});