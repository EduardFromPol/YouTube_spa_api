require('dotenv').config();
// const Sequelize = require('sequelize');
const { Pool } = require('pg')

// const pgDb = new Sequelize(
//     'youtubespa', 
//     'postgres', 
//     'admin', 
//     {
//         host: 'localhost', 
//         dialect: 'postgres',
//     }
// );

// const pgDb = new Sequelize(process.env.POSTGRES_CONNECT_URL); // local db
// const pgDb = new Sequelize(process.env.POSTGRES_URL); // vercel db

// module.exports = pgDb;


// const postgres = new Pool({
//     user: 'postgres',
//     password: 'admin',
//     port: 5432,
//     host: 'localhost',
//     database: 'youtubespa'
// });
const postgres = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});

postgres.connect(err => {
    if(err) throw err;
    console.log('Postgres connected...');
});

module.exports = postgres;