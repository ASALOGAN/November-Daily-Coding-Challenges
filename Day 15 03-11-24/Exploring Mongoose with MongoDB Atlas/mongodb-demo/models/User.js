// Import the mongoose library to define a schema and model for MongoDB
const mongoose = require("mongoose");

// Define a schema for the User model with specific fields and validation rules
const userSchema = new mongoose.Schema({
    // Define the 'name' field as a string, required, and trimmed of whitespace
    name: {
        type: String, // The data type for the 'name' field
        required: [true, 'Name is Required'], // Validation: 'name' must be provided
        trim: true, // Automatically remove whitespace from the beginning and end
    },
    // Define the 'email' field with unique constraint and regex pattern for validation
    email: {
        type: String, // The data type for the 'email' field
        required: [true, 'Email is required'], // Validation: 'email' must be provided
        Unique: true, // Ensure the 'email' is unique across all documents
        match: [/.+\@.+\..+/, 'Please fill a Valid Email Address'], // Validation: must match the regex pattern
    },
    // Define the 'password' field with a minimum length requirement
    password: {
        type: String, // The data type for the 'password' field
        required: [true, 'Password is required'], // Validation: 'password' must be provided
        minlength: [6, 'Password must be atleast 6 characters long'], // Validation: minimum length of 6 characters
    }
});

// Create a Mongoose model named 'User' using the defined schema
const User = mongoose.model('User', userSchema);

// Export the User model for use in other parts of the application
module.exports = User;