// models/ProgressStatus.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const ProgressStatus = sequelize.define('ProgressStatus', {
  progressStatusId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  statusType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Define associations with other models
ProgressStatus.associate = (models) => {
  ProgressStatus.belongsTo(models.Post, { foreignKey: 'postId' });
};

module.exports = ProgressStatus;
