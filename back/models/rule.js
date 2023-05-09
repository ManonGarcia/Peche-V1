const { DataTypes } = require('sequelize');
const db = require('../db.config');
const { Spot } = require('./spot');

const Rule = db.define('rule', {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      content: {
        type: DataTypes.STRING,
      }
    }, {
      underscored: true
    }
); 

Rule.belongsToMany(Spot);

module.exports = { Rule };
