'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('spots_rules', {
      spot_id: {
        type: Sequelize.UUID,
        references: {
          model: 'spots',
          key: 'id'
        }
      },
      rule_id: {
        type: Sequelize.UUID,
        references: {
          model: 'rules',
          key: 'id'
        }
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('spots_rules');
  }
};
