// const { DataTypes } = require('sequelize');
// const postgres = require('../config/db.js');
// const Auth = require('./authModel.js');

// const Favorites = postgres.define(
//     'favorite_list',
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             allowNull: false,
//             autoIncrement: true
//         },
//         search: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         authuser_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             require: true,
//             references: {
//                 model: Auth,
//                 key: 'id'
//             }
//         }
//     }
// );

// module.exports = Favorites;