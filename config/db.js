require('dotenv').config();
const pg = require('pg');
const Sequelize = require('sequelize');

const pgDb = new Sequelize(
    'youtubespa', 
    'postgres', 
    'admin', 
    {
        host: 'localhost', 
        dialect: 'postgres',
        dialectModule: pg
    }
);

module.exports = pgDb;