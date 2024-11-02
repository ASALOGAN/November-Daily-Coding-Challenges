// Import the express library to create an Express application
const express = require("express");
// Import the cors library to enable Cross-Origin Resource Sharing
const cors = require("cors");
// Import the dotenv library to load environment variables from a .env file
const dotenv = require("dotenv");
// Import the connectDB function to establish a connection to the MongoDB database
const connectDB = require("./config/db");
// Import the taskRoutes to handle task-related API endpoints
const taskRoutes = require("./routes/taskRoutes");

// Load environment variables from the .env file into process.env
dotenv.config();
// Establish a connection to the MongoDB database
connectDB();

// Create an instance of an Express application
const app = express();
// Use the cors middleware to allow cross-origin requests
app.use(cors());
// Use the express.json middleware to parse JSON request bodies
app.use(express.json());

// Use the taskRoutes for handling requests to the /api/tasks endpoint
app.use("/api/tasks", taskRoutes);

// Define the port number on which the server will listen, defaulting to 5000 if not specified in environment variables
const PORT = process.env.PORT || 5000;
// Start the server and listen on the specified port, logging a message to the console when the server is running
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
