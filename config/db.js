require('dotenv').config();
const Sequelize = require('sequelize');

const pgDb = new Sequelize(
    'youtubespa', 
    'postgres', 
    'admin', 
    {
        host: 'youtubeapi-1q99.onrender.com', 
        dialect: 'postgres',
    }
);

module.exports = pgDb;