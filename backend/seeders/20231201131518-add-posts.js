'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const data = [
      {
        userID: 0,
        title: 'seeder test',
        status: 'In Progress',
        description: 'denne post er oprettet gennem seeders',
        likeAmount: 2,
        category: 'Webdock API'
      },
      // Add more objects as needed
    ];
    
     await queryInterface.bulkInsert('Posts', data.map(post => {
      return {
        userID: post.userID,
        title: post.title,
        status: post.status,
        description: post.description,
        likeAmount: post.likeAmount,
        category: post.category,
        
    }
    }
    ));
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
