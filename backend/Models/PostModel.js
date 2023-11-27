// models/Post.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 


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

// Define associations with other models
Post.associate = (models) => {
  Post.belongsTo(models.User, { foreignKey: 'userId' });
  Post.hasMany(models.Notification, { foreignKey: 'postId' });
  Post.belongsTo(models.Category, { foreignKey: 'categoryId' });
  Post.belongsTo(models.ProgressStatus, { foreignKey: 'progressStatusId' });
  Post.belongsTo(models.FlagStatus, { foreignKey: 'flagStatusId' });
  Post.hasMany(models.LikeStatus, { foreignKey: 'postId' });
  Post.hasMany(models.Comment, { foreignKey: 'commentId' });
};

module.exports = Post;
