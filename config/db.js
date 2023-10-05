require('dotenv').config();
const Sequelize = require('sequelize');


// const pgDb = new Sequelize(process.env.POSTGRES_CONNECT_URL); // local db
// const pgDb = new Sequelize(process.env.POSTGRES_URL); // vercel db
// const pgDb = new Sequelize(process.env.POSTGRES_RENDER_URL) // render db


const { DBNAME, DBUSERNAME, DBPASSWORD, DBHOST } = process.env;

const pgDb = new Sequelize(
    DBNAME, 
    DBUSERNAME, 
    DBPASSWORD, 
    {
        host: DBHOST,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false // <<<<<<< YOU NEED THIS
            }
        }
    }
);

module.exports = pgDb;