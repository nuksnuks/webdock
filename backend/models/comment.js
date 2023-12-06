'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  Comment.init({
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
    description: DataTypes.STRING,
    likedComment: DataTypes.BOOLEAN,
    commentLikeAmount: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });


  return Comment;
};