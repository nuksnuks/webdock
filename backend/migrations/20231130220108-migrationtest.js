'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
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
};

  await queryInterface.createTable('Roles', {
    roleId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    roleType: {
      type: Sequelize.ENUM('Admin', 'User', 'Moderator'),
      allowNull: false,
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
  

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
