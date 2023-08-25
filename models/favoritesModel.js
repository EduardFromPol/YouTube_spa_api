const { DataTypes } = require('sequelize');
const pgDb = require('../config/db.js');
const Auth = require('./authModel.js');

const Favorites = pgDb.define(
    'favorite',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        search: {
            type: DataTypes.STRING,
            allowNull: false,
            require: true
        },
        authuser_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            require: true,
            references: {
                model: Auth,
                key: 'id'
            }
        }
    }
);

module.exports = Favorites;