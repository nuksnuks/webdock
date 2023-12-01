const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Make sure this is the correct path

// Assuming that `sequelize` is an instance of Sequelize
const Likes = sequelize.define('Likes', {
    likeID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userID: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users',
            key: 'userID',
        }
    },
    liked: {
        type: DataTypes.BOOLEAN
    }
});

module.exports = Likes;
