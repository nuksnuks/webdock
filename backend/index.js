const sequelize = require('sequelize');
const sequelize = require('./config/database');
const { syncModels } = require('./Models');

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection established!');
  })
  .catch((err) => {
    console.error('Unable to connect:', err);
  });

// Sync models
syncModels();
