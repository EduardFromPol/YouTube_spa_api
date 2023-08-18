const { DataTypes } = require('sequelize')
const pgDb = require('../config/db.js');

const Auth = pgDb.define('auth_user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    login: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false
    }
});

module.exports = Auth;


// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const authSchema = new Schema({
//     login: {
//         type: String,
//         required: true,
//     },
//     password: {
//         type: String,
//         required: true
//     }
// })
// const AuthModel = mongoose.model('AuthSchema', authSchema, 'authorizationUsers');


// module.exports = AuthModel;
