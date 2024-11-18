const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema(
  {
    // Reference to the user who owns this journal entry
    user: {
      type: mongoose.Schema.Types.ObjectId, // ObjectId type for referencing the User model
      ref: "User", // Reference to the User model
      required: true, // Ensure every journal entry is linked to a user
    },
    // Title of the journal entry
    title: {
      type: String, // The data type for the 'title' field
      required: [true, "Title is required"], // Validation: 'title' must be provided
      trim: true, // Automatically remove whitespace from the beginning and end
      maxlength: [100, "Title cannot exceed 100 characters"], // Validation: maximum length of 100 characters
    },
    // Content of the journal entry
    content: {
      type: String, // The data type for the 'content' field
      required: [true, "Content is required"], // Validation: 'content' must be provided
      trim: true, // Automatically remove whitespace from the beginning and end
    },
  },
  {
    // Enable timestamps to track creation and updates
    timestamps: true, // Adds 'createdAt' and 'updatedAt' fields
  }
);

module.exports = mongoose.model("Journal", journalSchema);
