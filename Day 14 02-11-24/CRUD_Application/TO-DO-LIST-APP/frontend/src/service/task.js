import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

// Function to get tasks with optional filters
export const getTasks = async (filters = {}) => {
  try {
    debugger;
    // Remove empty filter values to prevent server errors
    const validFilters = Object.fromEntries(
      Object.entries(filters).filter(([_, value]) => value !== "")
    );

    // Convert tags array to a comma-separated string if it exists
    if (validFilters.tags && Array.isArray(validFilters.tags)) {
      validFilters.tags = validFilters.tags.join(", ");
    }

    const response = await axios.get(API_URL, { params: validFilters });
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

// Function to create a new task
export const createTask = async (taskData) => {
  try {
    const response = await axios.post(API_URL, taskData);
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

// Function to update an existing task
export const updateTask = async (taskId, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/${taskId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

// Function to delete a task
export const deleteTask = async (taskId) => {
  try {
    const response = await axios.delete(`${API_URL}/${taskId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};
