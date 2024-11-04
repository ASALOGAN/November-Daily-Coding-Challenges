// Import the express library to create a router for handling HTTP requests
const express = require("express");
// Create a new router object to define routes for user operations
const router = express.Router();
// Import user controller functions for handling user-related operations
const userController = require("../controllers/userController");

// Define a POST route to create a new user
router.post('/users', userController.createUser);

// Define a GET route to retrieve all users
router.get('/users', userController.getUsers);

// Define a GET route to retrieve a user by their ID
router.get('/users/:id', userController.getUserById);

// Define a PUT route to update a user by their ID
router.put('/users/:id', userController.updateUser);

// Define a DELETE route to delete a user by their ID
router.delete('/users/:id', userController.deleteUser);

// Export the router object to be used in other parts of the application
module.exports = router;