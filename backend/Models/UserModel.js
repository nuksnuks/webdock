// models/User.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const User = sequelize.define('User', {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true, // Define userId as the primary key
    autoIncrement: true, 
  },
  roleId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Role', 
      key: 'roleId', 
    },
  },
  firstName: {
    type: DataTypes.STRING(255), 
    allowNull: true,
  },
  lastName: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  jobTitle: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
});

// Define associations with other models
User.associate = (models) => {
  User.hasMany(models.post, { foreignKey: 'UserId' });
  User.belongsTo(models.Role, { foreignKey: 'roleId' });
  // Add other associations...
};

module.exports = User;
