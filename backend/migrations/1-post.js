'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('posts', {post_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  },
    user_id:{
      type: Sequelize.INTEGER,
      references: {
      model: 'users',
      key: 'user_id',
      }
  },
    liked_post: Sequelize.BOOLEAN,
    like_amount: Sequelize.INTEGER,
    category: Sequelize.STRING,
    title: Sequelize.STRING,
    status: Sequelize.STRING,
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
