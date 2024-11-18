// Import the mongoose library for MongoDB interaction
const mongoose = require("mongoose");

// Define an asynchronous function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Attempt to connect to the database using the connection string from environment variables
    await mongoose.connect(process.env.MONGO_URI);
    // Log a success message if the connection is established
    console.log("MongoDB connected successfully");
  } catch (err) {
    // Log an error message if the connection fails
    console.error(`Error connecting to MongoDB: ${err.message}`);
    // Exit the process with a failure code
    process.exit(1);
  }
};

// Export the connectDB function for use in other parts of the application
module.exports = connectDB;