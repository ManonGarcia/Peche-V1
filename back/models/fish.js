const { DataTypes } = require('sequelize');
const db = require('../db.config');
const { Spot } = require('./spot');

const Fish = db.define('fish', {
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
      underscored: true
    }
); 

Fish.belongsToMany(Spot);

module.exports = { Fish };
