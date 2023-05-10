const { DataTypes } = require('sequelize');
const db = require('../db.config');

const Checklist = db.define('Checklist', {
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
      underscored: true,
      timestamps: false
      
    }
);


module.exports = { Checklist };
