// /Users/abd/projects/webdock/backend/Models/index.js

const sequelize = require('../config/database'); 
const Post = require('./PostModel');
const Role = require('./RoleModel');
const User = require('./UserModel');

// Sync all defined models to the database
const syncModels = async () => {
  try {
    await User.sync();
    await Post.sync();
    await Role.sync();
    console.log('Models synced successfully.');
  } catch (error) {
    console.error('Error syncing models:', error);
  }
};

syncModels()

module.exports = { syncModels, User, Post, Role };
