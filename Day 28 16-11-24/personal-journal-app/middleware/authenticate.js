// Import the jsonwebtoken library to handle JWT operations
const jwt = require("jsonwebtoken");

// Define the authenticate middleware function
const authenticate = (req, res, next) => {
  // Retrieve the token from the Authorization header
  const token = req.header("Authorization");

  // Check if the token is not provided
  if (!token) {
    // Respond with a 401 status code and an error message
    return res
      .status(401)
      .json({ message: "Access Denied. No token provided." });
  }

  // Split the token to check for the Bearer scheme
  const splitToken = token.split(" ");
  // Validate the token format
  if (splitToken[0] !== "Bearer" || !splitToken[1]) {
    // Respond with a 400 status code and an error message for invalid format
    return res.status(400).json({ message: "Token format is invalid." });
  }

  // Extract the actual token from the split parts
  const userToken = splitToken[1];
  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(userToken, process.env.JWT_SECRET);
    // Attach the decoded user information to the request object
    req.user = decoded;
    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Respond with a 401 status code and an error message for invalid token
    res.status(401).json({ message: "Invalid token." });
  }
};

// Export the authenticate middleware function
module.exports = authenticate;
