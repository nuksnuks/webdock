const sequelize = require('../config/database'); 
// først henter vi alle models:
const Post = require('./postModel');
const User = require('./userModel');
const Comment = require('./commentModel');
const Like = require('./likeModel');
const Notification = require('./notificationModel');

// så sync'er alle models så at tabellerne er i databasen
const syncModels = async () => {
    
  try {
    await User.sync();
    await Like.sync();
    await Post.sync();
    await Notification.sync();
    await Comment.sync();
    console.log('Models synced successfully.');
  } 
  catch (error) {
    console.error('Error syncing models:', error);
  }
};

module.exports =  syncModels ,{ Post, User, Comment, Like, Notification };