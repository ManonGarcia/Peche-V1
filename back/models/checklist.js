const { DataTypes } = require('sequelize');
const db = require('../db.config');
const { Material } = require('./material');

const Checklist = db.define('checklist', {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }
);

Checklist.belongsToMany(Material);

module.exports = { Checklist };
