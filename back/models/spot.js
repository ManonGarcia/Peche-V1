const { DataTypes } = require('sequelize');
const db = require('../db.config');

const Spot = db.define('Spot', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
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

module.exports = { Spot };
