const pgDb = require('../config/db.js');
const Auth = require('./authModel.js');
const { Sequelize } = require('sequelize');

const SearchList = pgDb.define(
    'search_list',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        search: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        },
        authuser_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            require: true,
            references: {
                model: Auth,
                key: "id"
            }
        }
    }
);

module.exports = SearchList;