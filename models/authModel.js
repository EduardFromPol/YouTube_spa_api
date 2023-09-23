const { Sequelize } = require('sequelize')
const pgDb = require('../config/db.js');

const Auth = pgDb.define(
    'auth_user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        login: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
});

module.exports = Auth;
