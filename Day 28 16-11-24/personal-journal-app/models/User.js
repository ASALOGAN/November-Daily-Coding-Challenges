// Import the mongoose library to define schemas and interact with MongoDB
const mongoose = require("mongoose");

// Import the bcrypt library for hashing passwords
const bcrypt = require("bcrypt");

// Define a new Mongoose schema for the User model
const userSchema = new mongoose.Schema({
  // Define the 'firstName' field as a string with validation rules
  firstName: {
    type: String, // The data type for the 'firstName' field
    required: [true, "First name is required"], // Validation: 'firstName' must be provided
    trim: true, // Automatically remove whitespace from the beginning and end
    maxlength: [50, "First name cannot exceed 50 characters"], // Validation: maximum length of 50 characters
  },
  // Define the 'lastName' field as a string with validation rules
  lastName: {
    type: String, // The data type for the 'lastName' field
    required: [true, "Last name is required"], // Validation: 'lastName' must be provided
    trim: true, // Automatically remove whitespace from the beginning and end
    maxlength: [50, "Last name cannot exceed 50 characters"], // Validation: maximum length of 50 characters
  },
  // Define the 'userName' field as a unique string with validation rules
  userName: {
    type: String, // The data type for the 'userName' field
    required: [true, "Username is required"], // Validation: 'userName' must be provided
    trim: true, // Automatically remove whitespace from the beginning and end
    unique: true, // Ensure the 'userName' is unique across all documents
    minlength: [4, "Username must be at least 4 characters"], // Validation: minimum length of 4 characters
    maxlength: [30, "Username cannot exceed 30 characters"], // Validation: maximum length of 30 characters
  },
  // Define the 'email' field as a unique string with validation rules
  email: {
    type: String, // The data type for the 'email' field
    required: [true, "Email is required"], // Validation: 'email' must be provided
    trim: true, // Automatically remove whitespace from the beginning and end
    unique: true, // Ensure the 'email' is unique across all documents
    lowercase: true, // Convert the 'email' to lowercase
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Regex pattern to validate email format
      "Please provide a valid email address", // Error message if validation fails
    ],
  },
  // Define the 'password' field as a string with validation rules
  password: {
    type: String, // The data type for the 'password' field
    required: [true, "Password is required"], // Validation: 'password' must be provided
    minlength: [6, "Password must be at least 6 characters long"], // Validation: minimum length of 6 characters
  },
  // Define the 'createdAt' field as a date with a default value
  createdAt: {
    type: Date, // The data type for the 'createdAt' field
    default: Date.now, // Default value is the current date and time
  },
  // Define the 'updatedAt' field as a date with a default value
  updatedAt: {
    type: Date, // The data type for the 'updatedAt' field
    default: Date.now, // Default value is the current date and time
  },
});

// Pre-save middleware to hash the password before saving the user document
userSchema.pre("save", async function (next) {
  // If the password field is not modified, skip hashing and proceed to the next middleware
  if (!this.isModified("password")) return next();

  try {
    // Generate a salt with a cost factor of 10
    const salt = await bcrypt.genSalt(10);
    // Hash the password using the generated salt
    this.password = await bcrypt.hash(this.password, salt);
    // Proceed to the next middleware
    next();
  } catch (error) {
    // Pass any errors to the next middleware
    next(error);
  }
});

// Method to compare a candidate password with the stored hashed password
userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    // Use bcrypt to compare the candidate password with the stored hashed password
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch; // Return the result of the comparison
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error comparing passwords:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

// Create a Mongoose model named 'User' using the defined schema
const User = mongoose.model("User", userSchema);

// Export the User model for use in other parts of the application
module.exports = User;