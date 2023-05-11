const { DataTypes } = require('sequelize');
const db = require('../db.config');

const User = db.define('User', {
      id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        is: /^[0-9a-f]{64}$/i,
      }
    }, {
      underscored: true
    }
);

module.exports = { User };
