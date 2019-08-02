const notesController = {};
const Note = require("../models/Note");

notesController.getNotes = async (req,res) => {
    const notes = await Note.find();
    res.json(notes);
}

notesController.createNote = async (req, res) => {
    const {title, content, date, author} = req.body;
    const newNote = new Note({title, content, author, date});
    await newNote.save();
    res.json({ message: 'Note Saved' });
};

notesController.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
}

notesController.updateNote = async (req, res) => {
    const { title, content, author } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, content, author } );
    res.json({ message: 'Note Updated' });
};

notesController.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: 'Note Deleted' });
};

module.exports = notesController;