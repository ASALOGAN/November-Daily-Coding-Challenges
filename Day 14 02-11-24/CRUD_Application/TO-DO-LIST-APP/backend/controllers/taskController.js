// Import the Task model to interact with the tasks collection in the database
const Task = require("../models/Task");

// Function to create a new task
const createTask = async (req, res) => {
  try {
    // Create a new task using the data from the request body
    const task = await Task.create(req.body);
    // Respond with the created task and a 201 status code
    res.status(201).json(task);
  } catch (error) {
    // If an error occurs, respond with a 400 status code and the error message
    res.status(400).json({ message: error.message });
  }
};

// Function to get all tasks with optional filtering by status, priority, or tags
const getTasks = async (req, res) => {
  try {
    // Initialize an empty filter object
    const filter = {};
    // Add status to the filter if it exists in the query parameters
    if (req.query.status) filter.status = req.query.status;
    // Add priority to the filter if it exists in the query parameters
    if (req.query.priority) filter.priority = req.query.priority;
    // Add tags to the filter if they exist in the query parameters, splitting them by comma
    if (req.query.tags) filter.tags = { $in: req.query.tags.split(",") };

    // Find tasks in the database that match the filter criteria
    const tasks = await Task.find(filter);
    // Respond with the found tasks
    res.json(tasks);
  } catch (error) {
    // If an error occurs, respond with a 500 status code and the error message
    res.status(500).json({ message: error.message });
  }
};

// Function to update a task by its ID
const updateTask = async (req, res) => {
  try {
    // Find a task by ID and update it with the data from the request body
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated task
    });
    // If no task is found, respond with a 404 status code and a message
    if (!task) return res.status(404).json({ message: "Task not found" });
    // Respond with the updated task
    res.json(task);
  } catch (error) {
    // If an error occurs, respond with a 400 status code and the error message
    res.status(400).json({ message: error.message });
  }
};

// Function to delete a task by its ID
const deleteTask = async (req, res) => {
  try {
    // Find a task by ID and delete it
    const task = await Task.findByIdAndDelete(req.params.id);
    // If no task is found, respond with a 400 status code and a message
    if (!task) return res.status(400).json({ message: "Task not found" });
    // Respond with a success message
    res.json({ message: "Task Deleted Successfully" });
  } catch (error) {
    // If an error occurs, respond with a 400 status code and the error message
    res.status(400).json({ message: error.message });
  }
};

// Export the controller functions for use in other parts of the application
module.exports = { createTask, getTasks, updateTask, deleteTask };
