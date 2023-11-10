// models/Role.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming you have a Sequelize instance created

const Role = sequelize.define('Role', {
  roleId: {
    type: DataTypes.INTEGER,
    primaryKey: true, // Define roleId as the primary key
    autoIncrement: true, 
  },
  roleType: {
    type: DataTypes.ENUM('Admin', 'User', 'Moderator'), // Replace with your specific role types
    allowNull: false,
  },
});

// Define associations with other models
Role.associate = (models) => {
  Role.hasMany(models.User, { foreignKey: 'RoleId' });
  // Add other associations as per your diagram
};

module.exports = Role;
