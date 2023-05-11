const { DataTypes } = require('sequelize');
const db = require('../db.config');

const Checklist = db.define('Checklist', {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, {
      underscored: true      
    }
);


module.exports = { Checklist };
