const { Router } = require('express'),
    usersController = require('../controllers/usersController'),
    router = Router();

// ? Get all Users
router.get('/', usersController.getUsers);

// ? Add a User
router.post('/', usersController.createUser);

// ? Delete a specific User
router.delete('/:id', usersController.deleteUser);

module.exports = router;
