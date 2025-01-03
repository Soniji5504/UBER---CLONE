require('dotenv').config(); // Load environment variables
const express = require('express'); // Corrected the order
const cors = require('cors');
const app = express();

// Enable CORS middleware
app.use(cors());

// Define a route
app.get('/', (req, res) => { // Fixed `app,get` to `app.get`
    res.send('Hello World'); // Fixed `resizeBy.send` to `res.send`
});

// Export the app for use in server.js
module.exports = app;
