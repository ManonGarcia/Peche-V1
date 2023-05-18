const { DataTypes } = require('sequelize');
const db = require('../db.config');

const Role = db.define('Role', {
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
      underscored: true,
      timestamps: false
    }
);

module.exports = { Role };
