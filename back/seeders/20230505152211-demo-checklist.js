'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const materials = await queryInterface.sequelize.query('SELECT id FROM materials');
    const materialsRows = materials[0];
    await queryInterface.bulkInsert('checklists', [
      {
        id: uuidv4(),
        name: 'checklist',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]
    );
    const checklist = await queryInterface.sequelize.query('SELECT id FROM checklists');
    const checklistRows = checklist[0];
    await queryInterface.bulkInsert('checklists_materials', [
      {
        checklist_id: checklistRows[0].id,
        material_id: materialsRows[0].id,
      }
    ]
    );
  },



  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('checklists', null, {});
  }
};
