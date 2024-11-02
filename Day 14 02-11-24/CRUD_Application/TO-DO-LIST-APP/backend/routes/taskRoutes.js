// Import the express library to create a router for handling HTTP requests
const express = require("express");
// Create a new router object to define routes for task operations
const router = express.Router();

// Import task controller functions for handling task-related operations
const {
  createTask,  // Function to handle creating a new task
  getTasks,    // Function to handle retrieving all tasks, with optional filtering
  updateTask,  // Function to handle updating a task by its ID
  deleteTask,  // Function to handle deleting a task by its ID
} = require("../controllers/taskController");

// Define a POST route to create a new task
router.post('/', createTask);

// Define a GET route to retrieve all tasks, with optional filtering
router.get('/', getTasks);

// Define a PUT route to update a task by its ID
router.put('/:id', updateTask);

// Define a DELETE route to delete a task by its ID
router.delete('/:id', deleteTask);

// Export the router object to be used in other parts of the application
module.exports = router;