'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    userID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM('user', 'admin'),
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW // Set a default value of the current timestamp
    }
    
  }, {
    sequelize,
    modelName: 'User',
  });

  User.associate = (models) => {
  
    User.hasOne(models.Notification, {
      foreignKey: 'userID'
    });
  
    User.hasMany(models.Comment, {
      foreignKey: 'userID'
    });
  
    User.hasMany(models.Post, {
      foreignKey: 'userID'
    });
  };

  return User;
};