const { DataTypes } = require('sequelize');
const db = require('../db.config');
const { Checklist } = require('./checklists')

const Material = db.define('material', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
}
);

Material.belongsToMany(Checklist);

module.exports = { Material };
