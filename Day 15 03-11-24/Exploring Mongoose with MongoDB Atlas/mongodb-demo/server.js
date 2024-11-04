// Import the express library to create an Express application
const express = require("express");
// Import the function to connect to the MongoDB database
const connectDB = require("./config/db");
// Import the user routes to handle user-related API endpoints
const userRoutes = require("./routes/userRoutes");

// Create an instance of an Express application
const app = express();

// Establish a connection to the MongoDB database
connectDB();

// Use middleware to parse incoming JSON requests
app.use(express.json());

// Use the user routes for any requests to the '/api' path
app.use('/api', userRoutes);

// Define the port number for the server to listen on, defaulting to 5000 if not specified in environment variables
const PORT = process.env.PORT || 5000;

// Start the server and listen on the specified port, logging a message to the console once the server is running
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})