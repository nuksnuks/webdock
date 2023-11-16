const sequelize = require('sequelize');
const connection = require('./config/database');
const { syncModels } = require('./Models');

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
