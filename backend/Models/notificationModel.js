const { Sequelize, DataTypes } = require('sequelize');

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
    userID: {
        type: DataTypes.INTEGER,
        references: {
        model: 'Users',
        key: 'userID',
        }
    },
    notificationType: {
        type: DataTypes.ENUM({values: ['adminNotification','userNotification']})
    },
    description: {
        type : DataTypes.STRING
    }
});

Notification.associate = (models) => {

    Notification.belongsToMany(Post, {
        through: 'NotificationPost',
        foreignKey: 'notificationID'
      });

};

module.exports = Notification;