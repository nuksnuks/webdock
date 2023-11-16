// models/Notification.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Notice = sequelize.define('Notice', {
  notificationId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  postId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Post',
      key: 'postId',
    },
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// Define associations with other models
Notice.associate = (models) => {
  Notice.belongsTo(models.User, { foreignKey: 'userId' });
  Notice.belongsTo(models.Post, { foreignKey: 'postId' });
};

module.exports = Notice;
