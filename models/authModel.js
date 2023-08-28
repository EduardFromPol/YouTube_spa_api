const { DataTypes } = require('sequelize')
const pgDb = require('../config/db.js');

const Auth = pgDb.define(
    'auth_user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
});

module.exports = Auth;
