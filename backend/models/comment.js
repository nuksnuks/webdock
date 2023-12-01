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
      // define association here
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

    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW // Set a default value of the current timestamp
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });


  return Comment;
};