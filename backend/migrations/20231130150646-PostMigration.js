'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      postID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'userID',
        },
      },
  
      category: {
        type: Sequelize.ENUM({
          values: [
            'Dashboard Features',
            'Documentation',
            'Billing Feature',
            'Networking',
            'Hardware and Products',
            'Perfect Server Stack',
            'Mobile App',
            'Webdock API',
            'Competition',
            'Uncategorized',
          ],
        }),
      },
      Status: {
        type: Sequelize.ENUM({
          values: ['Under Review', 'Planned', 'In Progress', 'Completed', 'Closed'],
        }),
      },
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      tag: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.BLOB,
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

    // Add foreign key for Comments
    await queryInterface.addColumn('Posts', 'commentID', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Comments',
        key: 'commentID',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });

    // Additional commands can be added here if needed
  },

  async down(queryInterface, Sequelize) {
    // Remove foreign key columns
    await queryInterface.removeColumn('Posts', 'likeID');
    await queryInterface.removeColumn('Posts', 'commentID');

    // Drop the Posts table
    await queryInterface.dropTable('Posts');
  },
};
