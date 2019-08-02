const { Router } = require('express'),
	notesController = require('../controllers/notesController'),
	router = Router();

// ? Get all Notes
router.get('/', notesController.getNotes);

// ? Add a Note
router.post('/', notesController.createNote);

// ? Get a Specific Note
router.get('/:id', notesController.getNote);

// ? Update a specific Note
router.put('/:id', notesController.updateNote);

// ? Delete a specific Note
router.delete('/:id', notesController.deleteNote);

module.exports = router;
