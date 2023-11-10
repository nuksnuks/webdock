// models/LikeStatus.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming you have a Sequelize instance created

const LikeStatus = sequelize.define('LikeStatus', {
  voteId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'User',
      key: 'userId',
    },
  },
  likeStatus: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

LikeStatus.associate = (models) => {
  LikeStatus.belongsTo(models.User, { foreignKey: 'userId', as: 'likedByUser' });
  LikeStatus.belongsTo(models.Post, { foreignKey: 'postId', as: 'likedPost' });
};

module.exports = LikeStatus;
