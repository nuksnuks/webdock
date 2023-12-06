'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.associate = (models) => {
        Post.hasMany(models.Comment, {
            foreignKey: 'postID'
        });
        
        Post.belongsTo(models.Notification, {
            through: 'NotificationPost',
            foreignKey: 'postID'
          });
    };
    }
  }
  Post.init({
    postID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  },
    userID:{
      type: DataTypes.INTEGER,
      references: {
      model: 'Users',
      key: 'userID',
      }
  },
    likedPost: DataTypes.BOOLEAN,
    postLikeAmount: DataTypes.INTEGER,
    category: DataTypes.STRING,
    title: DataTypes.STRING,
    status: DataTypes.STRING,
    description: DataTypes.STRING,
    tag: DataTypes.STRING,
    image: DataTypes.BLOB,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Post',
  });

  
  return Post;
};