const sequelize = require('sequelize');
const connection = require('./config/database');
const syncModels  = require('./Models/index');
const express = require('express');

const app = express();
app.use(express.json());

// Test the connection
connection
  .authenticate()
  .then(() => {
    console.log('Connection established!');
  })
  .catch((err) => {
    console.error('Unable to connect:', err);
  });

// Sync models
syncModels();

const PORT = process.env.PORT || 3066;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
