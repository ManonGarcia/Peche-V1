'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('spots', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      localisation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      banner: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      private: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      size: {
        type: Sequelize.INTEGER,
      },
      nb_posts: {
        type: Sequelize.INTEGER,
      },
      opening_date: {
        type: Sequelize.DATE,
      },
      closing_date: {
        type: Sequelize.DATE,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      price_duration: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('spots');
  }
};
