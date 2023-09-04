require('dotenv').config();
const Sequelize = require('sequelize');

// const pgDb = new Sequelize(
//     'youtubespa', 
//     'postgres', 
//     'admin', 
//     {
//         host: 'localhost', 
//         dialect: 'postgres',
//     }
// );

const pgDb = new Sequelize(process.env.POSTGRES_CONNECT_URL);


module.exports = pgDb;