const { DataTypes } = require('sequelize');
const db = require('../db.config');
const { Fish } = require('./fish');
const { Rule } = require('./rule');

const Spot = db.define('spot', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    localisation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    banner: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    private: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    size: {
        type: DataTypes.INTEGER,
    },
    nb_posts: {
        type: DataTypes.INTEGER,
    },
    opening_date: {
        type: DataTypes.DATE,
    },
    closing_date: {
        type: DataTypes.DATE,
    },
    price: {
        type: DataTypes.INTEGER,
    },
    price_duration: {
        type: DataTypes.STRING,
    }
    }, {
        underscored: true
      }
);

Spot.belongsToMany(Fish);
Spot.belongsToMany(Rule);

module.exports = { Spot };
