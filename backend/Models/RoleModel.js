// models/Role.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Role = sequelize.define('Role', {
  roleId: {
    type: DataTypes.INTEGER,
    primaryKey: true, // Define roleId as the primary key
    autoIncrement: true, 
  },
  roleType: {
    type: DataTypes.ENUM('Admin', 'User', 'Moderator'), 
    allowNull: false,
  },
});

// Define associations with other models
Role.associate = (models) => {
  Role.hasMany(models.User, { foreignKey: 'RoleId' });
};

module.exports = Role;
