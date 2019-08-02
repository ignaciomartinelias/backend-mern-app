const usersController = {};
const User = require("../models/User");

usersController.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

usersController.createUser = async (req, res) => {
    const username = req.body.username;
    const newUser = new User({ username }); 
    await newUser.save();
    res.json({ message: 'User Saved' });
};

usersController.deleteUser = async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({ message: 'User Deleted' });
};

module.exports = usersController;