'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Notification.associate = (models) => {

        Notification.belongsTo(Post, {
            foreignKey: 'postID'
          }),
        Notification.belongsToMany(Comment, {
            foreignKey: 'commentID'
          });
    
    };
    }
  }
  Notification.init({
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
    notificationType: DataTypes.STRING,
    description: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Notification',
  });

  

  return Notification;
};