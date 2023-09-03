require('dotenv').config();
const Sequelize = require('sequelize');

const pgDb = new Sequelize(
    'youtubespa', 
    'postgres', 
    'admin', 
    {
        host: '127.0.0.1', 
        dialect: 'postgres',
    }
);

module.exports = pgDb;