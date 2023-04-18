// const { Sequelize, DataTypes } = require('sequelize');

// const username = process.env.DB_USER;
// const password = process.env.DB_PASSWORD;
// const host = process.env.DB_HOST;
// const port = process.env.DB_PORT;
// const db = process.env.DB_DATABASE;

// const sequelize = new Sequelize(`postgres://${username}:${password}@${host}:${port}/${db}`);

// const User = sequelize.define('user', {
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   password: {
//     type: DataTypes.STRING
//   }
// });

// User.sync().then((data) => {
//   console.log('Synchro table et model ok !');
// }).catch((err) => {
//   console.log('Erreur de synchronisation table model !');
// });