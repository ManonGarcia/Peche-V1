const { DataTypes } = require('sequelize');
const db = require('../db.config');

const Rule = db.define('Rule', {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      content: {
        type: DataTypes.STRING,
      }
    }, {
      underscored: true,
      timestamps: false
    }
); 

module.exports = { Rule };
