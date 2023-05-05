const { DataTypes } = require('sequelize');
const db = require('../db.config');

const Fish = db.define('fish', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }
); 

module.exports = { Fish };
