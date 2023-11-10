// models/Notification.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Notification = sequelize.define('Notification', {
  notificationId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
Notification.associate = (models) => {
  Notification.belongsTo(models.User, { foreignKey: 'userId' });
  Notification.belongsTo(models.Post, { foreignKey: 'postId' });
};

module.exports = Notification;
