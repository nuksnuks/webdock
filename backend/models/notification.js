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
      // define association here
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
    notificationType: DataTypes.ENUM('adminNotification', 'userNotification'),
    description: DataTypes.STRING,
    createdAt: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.DataTypes.NOW // Set a default value of the current timestamp
    }
  }, {
    sequelize,
    modelName: 'Notification',
  });

  Notification.associate = (models) => {

    Notification.belongsToMany(Post, {
        foreignKey: 'postID'
      }),
    Notification.belongsToMany(Comment, {
        foreignKey: 'commentID'
      });

};

  return Notification;
};