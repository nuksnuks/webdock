const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../config/database');
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
    likedPost: {
        type: DataTypes.BOOLEAN,
    },
    likeAmount: {
        type: DataTypes.INTEGER
    },
    category: {
        type: DataTypes.ENUM({values: ['Dashboard Features','Documentation','Billing Feature','Networking','Heardware and Products','Perfect Server Stack', 'Mobile App','Webdock API','Competition','Uncategorized']})
    },
    title: {
        type: DataTypes.STRING
    },
    Status: {
        type: DataTypes.ENUM({values: ['Under Review', 'Planned' , 'In Progress' , 'Completed', 'Closed']})
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
    Post.hasMany(Comment, {
        foreignKey: 'postID'
    });
    
    Post.belongsTo(Notification, {
        through: 'NotificationPost',
        foreignKey: 'postID'
      });
};

module.exports = Post;