const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../config/database');
const Likes = require('./likeModel');
const { post } = require('../routes');

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
    category: {
        type: DataTypes.ENUM({values: ['Dashboard Features','Documentation','Billing Feature','Networking','Heardware and Products','Perfect Server Stack', 'Mobile App','Webdock API','Competition','Uncategorized']})
    },
    Status: {
        type: DataTypes.ENUM({values: ['Under Review', 'Planned' , 'In Progress' , 'Completed', 'Closed']})
    },
    title: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.ENUM({values: ['Under Review','Planned','In Progress','Completed','Closed']})
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
    Likes.belongsTo(Post,{foreignKey: 'likeID'})
    Post.hasMany(Comment, {
        foreignKey: 'postID'
    });
    
    Post.belongsToMany(Notification, {
        through: 'NotificationPost',
        foreignKey: 'postID'
      });
};

module.exports = Post;