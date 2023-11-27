const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../config/database');
const Likes = require('./likeModel');

const Post = sequelize.define('Post', {
    postID: {
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
    likeID: {
        type: DataTypes.INTEGER,
        references: {
        model: 'Likes',
        key: 'likeID',
        }
    },
    Category: {
        type: DataTypes.ENUM({values: ['Dashboard Features','Documentation','Billing Feature','Networking','Heardware and Products','Perfect Server Stack', 'Mobile App','Webdock API','Competition','Uncategorized']})
    },
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    tag: {
        type: DataTypes.STRING
    },
    image: {

        type: DataTypes.BLOB
    }
});

Post.associate = (models) => {
    Post.hasMany(Likes, {
        foreignKey: 'likeID'
    });
    
    Post.hasMany(Comment, {
        foreignKey: 'postID'
    });
    
    Post.belongsToMany(Notification, {
        through: 'NotificationPost',
        foreignKey: 'postID'
      });
};

module.exports = Post;