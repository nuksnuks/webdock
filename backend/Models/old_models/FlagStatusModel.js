// models/FlagStatus.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const FlagStatus = sequelize.define('FlagStatus', {
  flaggedId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  flaggedStatus: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Define associations with other models
FlagStatus.associate = (models) => {
  FlagStatus.belongsTo(models.Post, { foreignKey: 'postId' });
};

module.exports = FlagStatus;
