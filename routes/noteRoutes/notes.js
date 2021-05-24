const router = require("express").Router();
const notes = require("../../db/db.json");
const { createNewNote, deleteNote } = require("../../lib/notes");

router.get("/notes", (req, res) => {
  if (notes) {
    res.json(notes);
  } else {
    res.status(400).json({ message: "Could not fild it" });
  }
});

router.post("/notes", (req, res) => {
  const note = createNewNote(req.body, notes);
  res.json(note);
});

router.delete("/notes/:id", (req, res) => {
  const newNotesArray = deleteNote(req.params.id, notes);
  if (newNotesArray) {
    res.json(newNotesArray);
  } else {
    res.status(500).json({ message: "No note with that id" });
  }
});

module.exports = router;
