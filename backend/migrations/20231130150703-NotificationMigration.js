'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Notifications', {
      notificationID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      postID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Posts',
          key: 'postID',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      userID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'userID',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      notificationType: {
        type: Sequelize.ENUM({ values: ['adminNotification', 'userNotification'] }),
      },
      description: {
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

    // Additional commands can be added here if needed
  },

  async down(queryInterface, Sequelize) {
    // Remove foreign key columns
    await queryInterface.removeColumn('Notifications', 'postID');
    await queryInterface.removeColumn('Notifications', 'userID');

    // Drop the Notifications table
    await queryInterface.dropTable('Notifications');
  },
};
