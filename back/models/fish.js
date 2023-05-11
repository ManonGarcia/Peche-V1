const { DataTypes } = require('sequelize');
const db = require('../db.config');

const Fish = db.define('Fish', {
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
      underscored: true,
      timestamps: false
    }
); 

module.exports = { Fish };
