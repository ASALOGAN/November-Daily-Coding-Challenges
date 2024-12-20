// Import the express module to create a router instance
const express = require("express");
// Create a new router object to define routes
const router = express.Router();

// Import the authController to handle authentication-related requests
// Fix the typo in the variable name from 'authContoller' to 'authController'
const authController = require("../controllers/authController");

// Import the authentication middleware to protect secure routes
const authenticate = require("../middleware/authenticate");

// Define a POST route for user registration, handled by registerUser function
router.post("/register", authController.registerUser);
// Define a POST route for user login, handled by loginUser function
router.post("/login", authController.loginUser);
// Define a GET route for fetching user profile, handled by getUserProfile function
// This route is protected by the authenticate middleware
router.get("/profile", authenticate, authController.getUserProfile);

// Export the router to be used in other parts of the application
module.exports = router;