require('dotenv').config();
const {Sequelize}  = require('sequelize');

const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const db = process.env.DB_DATABASE;

const sequelize = new Sequelize(`postgres://${username}:${password}@${host}:${port}/${db}`);

sequelize.sync(() => {
    console.log('Synchro bdd OK !')
});

module.exports = sequelize;