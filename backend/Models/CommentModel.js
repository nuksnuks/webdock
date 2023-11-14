 // models/Comment.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming you have a Sequelize instance created

const Comment = sequelize.define('Comment', {
  commentId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'User',
      key: 'userId',
    },
  },
  postId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Post',
      key: 'postId',
    },
  },
  description: {
    type: DataTypes.TEXT,
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

Comment.associate = (models) => {
  Comment.belongsTo(models.User, { foreignKey: 'userId', as: 'commentedByUser' });
  Comment.belongsTo(models.Post, { foreignKey: 'postId', as: 'commentedOnPost' });
};

sequelize.sync()

module.exports = Comment;
