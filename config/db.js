require('dotenv').config();
const pg = require('pg');
const Sequelize = require('sequelize');

// const pgDb = new Sequelize(
//     'youtubespa', 
//     'postgres', 
//     'admin', 
//     {
//         host: 'localhost', 
//         dialect: 'postgres',
//         dialectModule: pg
//     }
// );

const pgDb = new Sequelize('postgres://admin:admin@localhost:5432/youtubespa', {
  dialectModule: pg
});

module.exports = pgDb;