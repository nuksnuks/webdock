// models/Post.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming you have a Sequelize instance created

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
    type: DataTypes.STRING, // You can adjust the data type as needed
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
  Post.belongsTo(models.User, { foreignKey: 'UserId' });
  Post.hasMany(models.Notification, { foreignKey: 'PostId' });
  Post.belongsTo(models.Category, { foreignKey: 'CategoryId' });
  Post.belongsTo(models.ProgressStatus, { foreignKey: 'ProgressStatusId' });
  Post.belongsTo(models.FlagStatus, { foreignKey: 'FlagStatusId' });
  Post.hasMany(models.LikeStatus, { foreignKey: 'PostId' });
  // Add other associations as per your diagram
};

module.exports = Post;
