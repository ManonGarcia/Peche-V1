'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('checklists_materials', {
      checklist_id: {
        type: Sequelize.UUID,
        references: {
          model: 'checklists',
          key: 'id'
        }
      },
      material_id: {
        type: Sequelize.UUID,
        references: {
          model: 'materials',
          key: 'id'
        }
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('checklists_materials');
  }
};
