// models/Post.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 


const Post = sequelize.define('Post', {
  postId: {
    type: DataTypes.INTEGER,
    primaryKey: true, // Define postId as the primary key
    autoIncrement: true, // If it's an auto-incrementing primary key
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  image: {
    type: DataTypes.BLOB, // You can adjust the data type as needed
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// Define associations with other models
Post.associate = (models) => {
  Post.belongsTo(models.User, { foreignKey: 'userId' });
  Post.hasMany(models.Notification, { foreignKey: 'postId' });
  Post.belongsTo(models.Category, { foreignKey: 'categoryId' });
  Post.belongsTo(models.ProgressStatus, { foreignKey: 'progressStatusId' });
  Post.belongsTo(models.FlagStatus, { foreignKey: 'flagStatusId' });
  Post.hasMany(models.LikeStatus, { foreignKey: 'postId' });
  Post.hasMany(models.Comment, { foreignKey: 'commentId' });
};

module.exports = Post;
