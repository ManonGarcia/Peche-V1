'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('materials', [
      {
        id: uuidv4(),
        name: 'Canne à pêche'
      },
      {
        id: uuidv4(),
        name: 'Hameçons'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('materials', null, {});
  }
};
