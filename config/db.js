<<<<<<< HEAD
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

=======
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

>>>>>>> 2e349abcf48689852b1d88a3f475f7cc0c30b15a
module.exports = pgDb;