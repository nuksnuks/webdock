'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      postID: {
        type: Sequelize.INTEGER
      },
      userID: {
        type: Sequelize.INTEGER
      },
      likedPost: {
        type: Sequelize.BOOLEAN
      },
      likeAmount: {
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.ENUM('Dashboard Features', 'Documentation', 'Billing Feature', 'Networking', 'Heardware and Products', 'Perfect Server Stack', 'Mobile App', 'Webdock API', 'Competition', 'Uncategorized')
      },
      title: {
        type: Sequelize.STRING
      },
      Status: {
        type: Sequelize.ENUM('Under Review', 'Planned', 'In Progress', 'Completed', 'Closed')
      },
      description: {
        type: Sequelize.STRING
      },
      tag: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.BLOB
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.fn('NOW') // Use a database function to set the default value
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};