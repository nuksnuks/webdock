'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create Users table
    await queryInterface.createTable('Users', {
      userID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      role: {
        type: Sequelize.ENUM('user', 'admin'),
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ssoToken: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    // Add foreign key for Likes
    await queryInterface.addColumn('Users', 'likeID', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Likes',
        key: 'likeID',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });

    // Add foreign key for Notification
    await queryInterface.addColumn('Users', 'notificationID', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Notifications',
        key: 'notificationID',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });

    // Add foreign key for Comment
    await queryInterface.addColumn('Users', 'commentID', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Comments',
        key: 'commentID',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });

    // Add foreign key for Post
    await queryInterface.addColumn('Users', 'postID', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Posts',
        key: 'postID',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remove foreign key columns
    await queryInterface.removeColumn('Users', 'likeID');
    await queryInterface.removeColumn('Users', 'notificationID');
    await queryInterface.removeColumn('Users', 'commentID');
    await queryInterface.removeColumn('Users', 'postID');

    // Drop the Users table
    await queryInterface.dropTable('Users');
  },
};
