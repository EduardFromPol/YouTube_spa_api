require('dotenv').config();

const Sequelize = require('sequelize');
const pgDb = new Sequelize(
    'youtubespa', 
    'postgres', 
    'admin', 
    {
        host: 'localhost', 
        dialect: 'postgres'
    }
)

module.exports = pgDb;