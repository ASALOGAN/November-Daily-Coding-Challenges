// Import the mongoose library for MongoDB object modeling
const mongoose = require("mongoose");

// Load environment variables from a .env file into process.env
const dotenv = require("dotenv");

// Redundant dotenv.config() call, already executed above
dotenv.config();

// Define an asynchronous function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the connection string from environment variables
    await mongoose.connect(process.env.MONGO_URI);
    // Log a success message if the connection is established
    console.log("MongoDB connected successfully");
  } catch (error) {
    // Log an error message if the connection fails
    console.error("MongoDB Connection error: ", error.message);
    // Exit the process with failure code 1
    process.exit(1);
  }
};

// Export the connectDB function for use in other parts of the application
module.exports = connectDB;
