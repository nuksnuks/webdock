// models/MergedPost.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const MergedPost = sequelize.define('MergedPost', {
  mergedPostId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  listItem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = MergedPost;
