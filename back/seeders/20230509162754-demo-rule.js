'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('rules', [
      {
        id: uuidv4(),
        content: 'Baignade interdite'
      },
      {
        id: uuidv4(),
        content: 'Bateaux interdits'
      },
      {
        id: uuidv4(),
        content: 'Carte de pêche obligatoire'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rules', null, {});
  }
};
