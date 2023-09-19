require('dotenv').config();
const Sequelize = require('sequelize');


// const pgDb = new Sequelize(process.env.POSTGRES_CONNECT_URL); // local db
// const pgDb = new Sequelize(process.env.POSTGRES_URL); // vercel db
// const pgDb = new Sequelize(process.env.POSTGRES_RENDER_URL) // render db

const pgDb = new Sequelize(
    'youtube_api_seq', 
    'youtube_api_seq_user', 
    'CsNFVwiyeAcuMedjk0fkWEtWLuLvYGTy', 
    {
        host: 'dpg-cjsp7je3m8ac73erg5fg-a.oregon-postgres.render.com',
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