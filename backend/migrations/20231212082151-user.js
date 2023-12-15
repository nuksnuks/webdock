'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
  
    await queryInterface.addColumn(
      'Users',
      'avatarURL',
      {
        type: Sequelize.DataTypes.STRING,
      })
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('users');
     
  }
};
