const { DataTypes } = require('sequelize');
const db = require('../db.config');

const User = db.define('user', {
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        is: /^[0-9a-f]{64}$/i
      }
    }, {
      // schema: 'users',
      // tableName: 'tb_user',
      // timestamps: false
    }
);

module.exports = User;
