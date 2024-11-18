const express = require("express");
const router = express.Router();

// Import controller functions
const {
  createJournal,
  getJournals,
  getJournalById,
  updateJournal,
  deleteJournal,
} = require("../controllers/journalController");

// Import authentication middleware
const authenticate = require("../middleware/authenticate");

// Define routes for journal operations

// Create a new journal entry
router.post("/", authenticate, createJournal);

// Get all journal entries for the logged-in user
router.get("/", authenticate, getJournals);

// Get a single journal entry by ID
router.get("/:id", authenticate, getJournalById);

// Update a journal entry by ID
router.put("/:id", authenticate, updateJournal);

// Delete a journal entry by ID
router.delete("/:id", authenticate, deleteJournal);

module.exports = router;
