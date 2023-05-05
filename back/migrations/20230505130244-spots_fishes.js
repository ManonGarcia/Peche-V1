'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('spots_fishes', {
      spot_id: {
        type: Sequelize.UUID,
        references: {
          model: 'spots',
          key: 'id'
        }
      },
      fish_id: {
        type: Sequelize.UUID,
        references: {
          model: 'fishes',
          key: 'id'
        }
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('spots_fishes');
  }
};
