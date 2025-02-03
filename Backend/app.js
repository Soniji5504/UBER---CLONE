const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const bodyParser = require('body-parser');
connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());

// Root route to check if the server is running
app.get('/', (req, res) => {
    res.send('Hello World'); 
});

// Route for handling user-related requests
app.use('/users', userRoutes);

// Route for handling captain-related requests
app.use('/captains', captainRoutes);

// Handle 404
app.use((_, res) => {
    res.status(404).json({ message: 'Route not found' });
});

module.exports = app;
