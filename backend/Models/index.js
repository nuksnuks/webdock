// /Users/abd/projects/webdock/backend/Models/index.js

const sequelize = require('../config/database'); 
const Post = require('./PostModel');
const Role = require('./RoleModel');
const User = require('./UserModel');
const Category = require('./CategoryModel');
const Comment = require('./CommentModel');
const FlagStatus = require('./FlagStatusModel');
const LikeStatus = require('./LikeStatusModel');
const MergedPost = require('./MergedPostModel');
const Notice = require('./NoticeModel');
const ProgressStatus = require('./ProgressStatusModel');




// Sync all defined models to the database
const syncModels = async () => {
  try {
    await Post.sync();
    await Role.sync();
    await User.sync();
    await Category.sync();
    await Comment.sync();
    await FlagStatus.sync();
    await LikeStatus.sync();
    await MergedPost.sync();
    await Notice.sync();
    await ProgressStatus.sync();

    console.log('Models synced successfully.');
  } catch (error) {
    console.error('Error syncing models:', error);
  }
};

syncModels()
sequelize.sync()

module.exports = { syncModels, User, Post, Role, Category, Comment, FlagStatus, 
  LikeStatus, MergedPost, Notice, ProgressStatus};
