// Import necessary modules and files
const express = require("express"); // Express framework for building web applications
const dotenv = require("dotenv"); // Module to load environment variables from a .env file
const authRoutes = require("./routes/auth"); // Authentication routes
const journalRoutes = require("./routes/journal"); // Journal CRUD routes
const authenticate = require("./middleware/authenticate"); // Middleware for authentication
const connectDB = require("./config/database"); // Function to connect to MongoDB

// Load environment variables from .env file into process.env
dotenv.config();

// Create an instance of the Express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB using the connectDB function
connectDB();

// Define the port for the server to listen on, defaulting to 5000 if not specified
const PORT = process.env.PORT || 5000;

// Use authentication routes under the /api/auth path
app.use("/api/auth", authRoutes);

// Use journal routes under the /api/journals path, protected by authentication middleware
app.use("/api/journals", authenticate, journalRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Log a message when the server starts
});

