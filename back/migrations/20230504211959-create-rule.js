'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('rules', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      content: {
        type: Sequelize.STRING
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('rules');
  }
};
