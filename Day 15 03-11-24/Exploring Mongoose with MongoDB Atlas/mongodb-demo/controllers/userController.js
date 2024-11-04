// Import the User model to interact with the users collection in the database
const User = require("../models/User");

// Function to create a new user
const createUser = async (req, res) => {
  try {
    // Create a new user using the data from the request body
    const user = await User.create(req.body);
    // Respond with the created user and a 201 status code
    res.status(201).json(user);
  } catch (error) {
    // If an error occurs, respond with a 400 status code and the error message
    res.status(400).json({ message: error.message });
  }
};

// Function to get all users
const getUsers = async (req, res) => {
  try {
    // Find all users in the database
    const users = await User.find();
    // Respond with the found users and a 200 status code
    res.status(200).json(users);
  } catch (error) {
    // If an error occurs, respond with a 400 status code and the error message
    res.status(400).json({ message: error.message });
  }
};

// Function to get a user by their ID
const getUserById = async (req, res) => {
  try {
    // Find a user by ID
    const user = await User.findById(req.params.id);
    // If no user is found, respond with a 404 status code and a message
    if (!user) return res.status(404).json({ message: "User not found" });
    // Respond with the found user and a 200 status code
    res.status(200).json(user);
  } catch (error) {
    // If an error occurs, respond with a 400 status code and the error message
    res.status(400).json({ message: error.message });
  }
};

// Function to update a user by their ID
const updateUser = async (req, res) => {
  try {
    // Find a user by ID and update them with the data from the request body
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated user
      runValidators: true, // Run validation on the updated data
    });
    // If no user is found, respond with a 404 status code and a message
    if (!user) return res.status(404).json({ message: "User not found" });
    // Respond with the updated user and a 200 status code
    res.status(200).json(user);
  } catch (error) {
    // If an error occurs, respond with a 400 status code and the error message
    res.status(400).json({ message: error.message });
  }
};

// Function to delete a user by their ID
const deleteUser = async (req, res) => {
  try {
    // Find a user by ID and delete them
    const user = await User.findByIdAndDelete(req.params.id);
    // If no user is found, respond with a 404 status code and a message
    if (!user) return res.status(404).json({ message: 'User not found' });
    // Respond with a success message and a 200 status code
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    // If an error occurs, respond with a 400 status code and the error message
    res.status(400).json({ message: error.message });
  }
};

// Export the controller functions for use in other parts of the application
module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };
