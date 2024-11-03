// Import the mongoose library to define a schema for MongoDB
const mongoose = require("mongoose");

// Define a schema for a Task using mongoose
const taskSchema = new mongoose.Schema({
    // The name of the task, which is a required string
    name: {
        type: String,
        required: true,
    },
    // The date when the task was created, defaults to the current date and time
    createdAt: {
        type: Date,
        default: Date.now,
    },
    // The status of the task, which can be 'pending', 'In Progress', or 'Completed', defaults to 'Pending'
    status: {
        type: String,
        enum: ['Not Started','Pending', 'In Progress', 'Completed'],
        default: 'Pending',
    },
    // The due date for the task, which is optional
    dueDate: {
        type: Date,
    },
    // The priority level of the task, which can be 'Low', 'Medium', or 'High', defaults to 'Medium'
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Medium',
    },
    // An array of tags associated with the task, which are strings
    tags: {
        type: [String],
    },
});

// Export the Task model based on the taskSchema for use in other parts of the application
module.exports = mongoose.model('Task', taskSchema);