const { DataTypes } = require('sequelize');
const db = require('../db.config');

const Rule = db.define('rule', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      content: {
        type: DataTypes.STRING,
      }
    }
); 

module.exports = { Rule };
