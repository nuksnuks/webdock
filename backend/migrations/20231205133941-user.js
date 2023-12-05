'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('users', {userID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      ssoToken: Sequelize.STRING,
    }})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
