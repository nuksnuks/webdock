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
    likeAmount: DataTypes.INTEGER,
    category: DataTypes.ENUM('Dashboard Features', 'Documentation', 'Billing Feature', 'Networking', 'Heardware and Products', 'Perfect Server Stack', 'Mobile App', 'Webdock API', 'Competition', 'Uncategorized'),
    title: DataTypes.STRING,
    Status: DataTypes.ENUM('Under Review', 'Planned', 'In Progress', 'Completed', 'Closed'),
    description: DataTypes.STRING,
    tag: DataTypes.STRING,
    image: DataTypes.BLOB,
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW // Set a default value of the current timestamp
    }
  }, {
    sequelize,
    modelName: 'Post',
  });

  
  return Post;
};