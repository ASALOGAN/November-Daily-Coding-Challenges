// Import the User model to interact with the user data in the database
const User = require("../models/User");

// Import the jsonwebtoken library to handle JWT operations
const jwt = require("jsonwebtoken");

// Define an asynchronous function to handle user registration
const registerUser = async (req, res) => {
  // Destructure the request body to extract user details
  const { firstName, lastName, userName, email, password } = req.body;

  try {
    // Check if a user with the same email or username already exists in the database
    const existingUser = await User.findOne({ $or: [{ email }, { userName }] });

    // If an existing user is found, return a 400 status with an error message
    if (existingUser) {
      return res
        .status(400) // Set HTTP status code to 400 for bad request
        .json({ message: "Email or userName already in use" }); // Send JSON response with error message
    }

    // Create a new user instance with the provided details
    const newUser = new User({
      firstName, // Assign firstName from request body
      lastName, // Assign lastName from request body
      userName, // Assign userName from request body
      email, // Assign email from request body
      password, // Assign password from request body
    });

    // Save the new user to the database
    await newUser.save();

    // Respond with a success message and user details, excluding the password
    res.status(201).json({
      message: "User registered successfully.", // Success message
      user: {
        id: newUser._id, // Include user ID in response
        firstName: newUser.firstName, // Include firstName in response
        lastName: newUser.lastName, // Include lastName in response
        userName: newUser.userName, // Include userName in response
        email: newUser.email, // Include email in response
      },
    });
  } catch (error) {
    // Handle any errors that occur during the database query
    console.error("Error checking for existing user:", error); // Log error for debugging
    res.status(500).json({ message: "Error registering user.", error }); // Send JSON response with error message
  }
};

// Define an asynchronous function to handle user login
const loginUser = async (req, res) => {
  // Destructure the request body to extract emailOrUsername and password
  const { emailOrUsername, password } = req.body;

  try {
    // Find a user in the database with the provided email or username
    const user = await User.findOne({
      $or: [{ email: emailOrUsername }, { userName: emailOrUsername }],
    });

    // If no user is found, return a 404 status with an error message
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await user.comparePassword(password);

    // If the passwords do not match, return a 400 status with an error message
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // Generate a JWT token for the authenticated user
    const token = jwt.sign(
      { id: user._id, email: user.email }, // Payload containing user ID and email
      process.env.JWT_SECRET, // Secret key for signing the token
      { expiresIn: "1h" } // Token expiration time set to 1 hour
    );

    res.status(200).json({
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        firstName: user.firstName, // Include firstName in response
        lastName: user.lastName, // Include lastName in response
        userName: user.userName, // Include userName in response
        email: user.email, // Include email in response
      },
    });
  } catch (error) {
    // Handle any errors that occur during the login process
    console.error("Error during user login:", error); // Log error for debugging
    res.status(500).json({ message: "Error logging in user.", error }); // Send JSON response with error message
  }
};

// Define an asynchronous function to handle fetching the user profile
const getUserProfile = async (req, res) => {
  try {
    // Find the user in the database by their ID, excluding the password field
    const user = await User.findById(req.user.id).select("-password");

    // If no user is found, return a 404 status with an error message
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // If the user is found, return a 200 status with the user data
    res.status(200).json({ user });
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ message: "Error fetching user Profile", error });
  }
};

// Export the functions for user registration, login, and profile retrieval
// This allows these functions to be imported and used in other parts of the application
module.exports = {
  registerUser, // Function to handle user registration
  loginUser, // Function to handle user login
  getUserProfile, // Function to fetch the user's profile
};