'use strict';
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const roleAdmin = await queryInterface.sequelize.query("SELECT id FROM roles WHERE role = 'admin'");
    const roleUser = await queryInterface.sequelize.query("SELECT id FROM roles WHERE role = 'user'");

    await queryInterface.bulkInsert('users', [
      {
        id: uuidv4(),
        username: "username",
        password: await bcrypt.hash('password', 10),
        created_at: new Date(),
        updated_at: new Date(),
        role_id: roleUser[0][0].id
      },
      {
        id: uuidv4(),
        username: "admin",
        password: await bcrypt.hash('password', 10),
        created_at: new Date(),
        updated_at: new Date(),
        role_id: roleAdmin[0][0].id
      }
    ]);
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
