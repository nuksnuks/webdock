const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../config/database');

const User = sequelize.define('User',{
    userID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    role: {
        type: DataTypes.ENUM({values: ['user','admin']}),
    },
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    ssoToken: { // Add this field for storing the SSO token
      type: DataTypes.STRING
    },
});

User.associate = (models) => {
  
  User.hasOne(Notification, {
    foreignKey: 'userID'
  });

  User.hasMany(Comment, {
    foreignKey: 'userID'
  });

  User.hasMany(Post, {
    foreignKey: 'userID'
  });
};

module.exports = User;