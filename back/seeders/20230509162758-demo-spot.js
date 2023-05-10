'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const fishes = await queryInterface.sequelize.query('SELECT id FROM fishes');
    const fishesRows = fishes[0];
    const rules = await queryInterface.sequelize.query('SELECT id FROM rules');
    const rulesRows = rules[0];

    await queryInterface.bulkInsert('spots', [
      {
        id: uuidv4(),
        name: 'spot',
        localisation: 'Noizay',
        banner: 'Image',
        private: true,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]
    );

    const spot = await queryInterface.sequelize.query('SELECT id FROM spots');
    const spotRows = spot[0];

    await queryInterface.bulkInsert('spots_fishes', [
      {
        spot_id: spotRows[0].id,
        fish_id: fishesRows[0].id,
      }
    ]
    );

    await queryInterface.bulkInsert('spots_rules', [
      {
        spot_id: spotRows[0].id,
        rule_id: rulesRows[0].id,
      }
    ]
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('spots', null, {});
  }
};
