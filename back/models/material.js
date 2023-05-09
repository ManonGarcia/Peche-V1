const { DataTypes } = require('sequelize');
const db = require('../db.config');

const Material = db.define('Material', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
  }, {
    timestamps: false,
    underscored: true
  }
);

module.exports = { Material };
