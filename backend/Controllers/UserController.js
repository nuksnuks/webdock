const User = require("../Models/userModel");

const UserController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  getUserById: async (req, res) => {
    const userID = req.params.id;
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  // Add other user-related controller methods...
};

module.exports = UserController;
