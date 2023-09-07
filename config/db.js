require('dotenv').config();
const Sequelize = require('sequelize');


// const pgDb = new Sequelize(process.env.POSTGRES_CONNECT_URL); // local db
// const pgDb = new Sequelize(process.env.POSTGRES_URL); // vercel db
const pgDb = new Sequelize(process.env.POSTGRES_RENDER_URL) // render db

module.exports = pgDb;