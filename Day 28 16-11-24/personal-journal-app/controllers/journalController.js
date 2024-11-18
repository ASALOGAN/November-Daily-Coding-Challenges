const Journal = require("../models/Journal");

// Create a new journal entry
const createJournal = async (req, res) => {
  const { title, content } = req.body;

  try {
    // Create a new journal entry with the user ID from the authenticated request
    const journal = new Journal({
      user: req.user.id, // Extracted from `authenticate` middleware
      title,
      content,
    });

    // Save the journal entry to the database
    await journal.save();

    res.status(201).json({
      message: "Journal entry created successfully",
      journal,
    });
  } catch (error) {
    console.error("Error creating journal entry:", error);
    res.status(500).json({ message: "Error creating journal entry", error });
  }
};

// Get all journal entries for the logged-in user
const getJournals = async (req, res) => {
  try {
    // Fetch journal entries for the logged-in user, sorted by creation date
    const journals = await Journal.find({ user: req.user.id }).sort({
      createdAt: -1, // Most recent first
    });

    res.status(200).json({
      message: "Journals fetched successfully",
      journals,
    });
  } catch (error) {
    console.error("Error fetching journals:", error);
    res.status(500).json({ message: "Error fetching journals", error });
  }
};

// Get a single journal entry by ID
const getJournalById = async (req, res) => {
  const { id } = req.params;

  try {
    const journal = await Journal.findOne({
      _id: id,
      user: req.user.id, // Ensure the journal belongs to the logged-in user
    });

    if (!journal) {
      return res.status(404).json({ message: "Journal entry not found" });
    }

    res.status(200).json({
      message: "Journal entry fetched successfully",
      journal,
    });
  } catch (error) {
    console.error("Error fetching journal entry:", error);
    res.status(500).json({ message: "Error fetching journal entry", error });
  }
};

// Update a journal entry
const updateJournal = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    // Find and update the journal entry
    const journal = await Journal.findOneAndUpdate(
      { _id: id, user: req.user.id }, // Match by ID and logged-in user
      { title, content, updatedAt: Date.now() }, // Update fields
      { new: true, runValidators: true } // Return the updated document and validate
    );

    if (!journal) {
      return res.status(404).json({ message: "Journal entry not found" });
    }

    res.status(200).json({
      message: "Journal entry updated successfully",
      journal,
    });
  } catch (error) {
    console.error("Error updating journal entry:", error);
    res.status(500).json({ message: "Error updating journal entry", error });
  }
};

// Delete a journal entry
const deleteJournal = async (req, res) => {
  const { id } = req.params;

  try {
    const journal = await Journal.findOneAndDelete({
      _id: id,
      user: req.user.id, // Ensure the journal belongs to the logged-in user
    });

    if (!journal) {
      return res.status(404).json({ message: "Journal entry not found" });
    }

    res.status(200).json({
      message: "Journal entry deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting journal entry:", error);
    res.status(500).json({ message: "Error deleting journal entry", error });
  }
};

// Export the controller functions
module.exports = {
  createJournal,
  getJournals,
  getJournalById,
  updateJournal,
  deleteJournal,
};
