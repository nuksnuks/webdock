const { User } = require("../models");

const userController = {
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
  loginUserWithSSO: async (req, res) => {
    try {
      // Extract the SSO token from the request body
      const ssoToken = req.body.ssoToken;
  
      // Validate the token (Verify it against the SSO provider's public key)
      const decodedToken = jwt.verify(ssoToken, process.env.PRIVATE_KEY);
  
      // Store the SSO token in the user's record
      const user = await User.findOne({ where: { email: decodedToken.email } });
      if (user) {
        user.ssoToken = ssoToken;
        await user.save();
  
        // Set the redirect URL to http://localhost:5173/
        const redirectUrl = 'http://localhost:5173/';
  
        // Redirect the user back to our solution
        res.redirect(redirectUrl);

        console.log(process.env.PRIVATE_KEY);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

};

module.exports = userController;
