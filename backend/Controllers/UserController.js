require('dotenv').config();
const User = require("../Models/UserModel");
const jwt = require('jsonwebtoken');
const privateKey = process.env.PRIVATE_KEY;


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
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },
  createUser: async (req, res) => {
    try {
      const user = await User.create({
        role: 'user',
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },
  verifyUser: async (req, res) => {
    const { ssoToken } = req.body;
    const user = jwt.verify(ssoToken, privateKey);
    console.log(user);
    res.json(user);
},
  

  // Add other user-related controller methods...
};

module.exports = UserController;
