'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
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

    // Add a foreign key to the Users table
    await queryInterface.addColumn('Users', 'RoleId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Roles',
        key: 'roleId',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the foreign key from the Users table
    await queryInterface.removeColumn('Users', 'RoleId');

    // Drop the Roles table
    await queryInterface.dropTable('Roles');
  },
};
