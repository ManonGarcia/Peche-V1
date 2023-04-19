const { DataTypes } = require('sequelize');
const db = require('../db.config');


const User = db.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    is: /^[0-9a-f]{64}$/i
  }
}, { paranoid: true });             //softDelete

module.exports = User;