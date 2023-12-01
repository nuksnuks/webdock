const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../config/database');

const Comment = sequelize.define('Comment',{
    commentID: {
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
    postID: {
        type: DataTypes.INTEGER,
        references: {
        model: 'Posts',
        key: 'postID',
        }
    },
    description: {
        type : DataTypes.STRING
    }
});

module.exports = Comment;