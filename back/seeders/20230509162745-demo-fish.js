'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('fishes', [
      {
        id: uuidv4(),
        name: 'CARPE'
      },
      {
        id: uuidv4(),
        name: 'BROCHET'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('fishes', null, {});
  }
};
