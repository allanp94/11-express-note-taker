const fs = require("fs");
const path = require("path");
const uniqid = require("uniqid");

function createNewNote(body, notesArray) {
  const note = { id: uniqid(), ...body };
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesArray, null, 2)
  );

  return note;
}

function deleteNote(noteId, notesArray) {
  const newNotesList = notesArray.filter((note) => note.id !== noteId);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(newNotesList, null, 2)
  );

  return newNotesList;
}

module.exports = { createNewNote, deleteNote };
