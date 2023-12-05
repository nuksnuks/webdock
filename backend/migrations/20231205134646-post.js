'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('Post', {postID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  },
    userID:{
      type: Sequelize.INTEGER,
      references: {
      model: 'Users',
      key: 'userID',
      }
  },
    likedPost: Sequelize.BOOLEAN,
    likeAmount: Sequelize.INTEGER,
    category: Sequelize.STRING,
    title: Sequelize.STRING,
    Status: Sequelize.STRING,
    description: Sequelize.STRING,
    tag: Sequelize.STRING,
    image: Sequelize.BLOB,
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Post');
  }
};
