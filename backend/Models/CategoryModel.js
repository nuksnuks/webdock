// models/Category.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Category = sequelize.define('Category', {
  categoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  categoryType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
});

// Define associations with other models
Category.associate = (models) => {
  Category.belongsTo(models.Post, { foreignKey: 'CategoryId' });
  
};

module.exports = Category;
