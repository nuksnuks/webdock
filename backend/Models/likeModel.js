const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../config/database');

const Likes = sequelize.define('Like', {
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