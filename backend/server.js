const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');

const User = require('./Models/UserModel');

// Initialize Express
const app = express();
app.use(cors());
app.use(express.json());

// Initialize Sequelize
const sequelize = new Sequelize('webdock_db', 'root', 'zob4hSbUGSAM', {
  host: 'davidsserver.vps.webdock.cloud',
  dialect: 'mysql'
});

app.get('/Users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});

const PORT = process.env.PORT || 3066;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
