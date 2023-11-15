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

// E/R Diagram relationer
  Category.associate = (models) => {
  Category.belongsTo(models.Post, { foreignKey: 'categoryId' });
};

module.exports = Category;
