const { DataTypes } = require('sequelize');
const db = require('../db.config');

const Spot = db.define('spot', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
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
    }
);

module.exports = Spot;
