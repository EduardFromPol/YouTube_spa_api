require('dotenv').config();
const mongoose = require('mongoose');


// const db = () => {
//     mongoose.connect(process.env.URL)
//         .then(() => console.log('Seccessfull connect!'))
//         .catch((error) => console.log(error));
// };

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