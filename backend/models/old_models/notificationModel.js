const { Sequelize, DataTypes } = require('sequelize');
const Post = require('./PostModel');
const Comment = require('./CommentModel')

const sequelize = require('../config/database');

const Notification = sequelize.define('Notification',{
    notificationID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    postID: {
        type: DataTypes.INTEGER,
        references: {
        model: 'Posts',
        key: 'postID',
        }
    },
    commentID: {
        type: DataTypes.INTEGER,
        references: {
        model: 'Comments',
        key: 'commentID',
        }
    },
    notificationType: {
        type: DataTypes.ENUM({values: ['adminNotification','userNotification']})
    },
    description: {
        type : DataTypes.STRING
    }
});

// Notification.associate = (models) => {
// 
//     Notification.belongsToMany(Post, {
//         foreignKey: 'postID'
//       }),
//     Notification.belongsToMany(Comment, {
//         foreignKey: 'commentID'
//       });
// 
// };

module.exports = Notification;