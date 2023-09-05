require('dotenv').config();
const UserServices = require('../services/UserServices.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const postgres = require('../config/db.js');


class UserControllers {

    async allUsers() {
        const users = await UserServices.allUsers();
        return users;
    }

    async login( login, password ) {
        
        // const createdUser = await postgres.query('INSERT INTO auth_users (login, password) values ($1, $2) RETURNING *', 
        // [login, password]);

        const finderUser = await UserServices.findUserByLogin( login );
        const id = finderUser[0].id;
        if(finderUser) {
            const comparePass = await bcrypt.compare( password, finderUser[0].password );
            if( comparePass ) {
                const token = jwt.sign({ id }, process.env.SECRET_ACCESS_TOKEN);
                return token;
            } else {
                return { message: 'invalid token' };
            }
        } else { 
            return null;
        }
    };

    async register( login, password ) {
        const finderUser = await UserServices.findUserByLogin( login );
        const date = new Date();
        

        if(!finderUser[0]) {
            const salt = await bcrypt.genSalt(10);
            const hashPass = await bcrypt.hash( password, salt );
            // const createdUser = await UserServices.createUser({
            //     login, 
            //     password: hashPass
            // });
            // return createdUser;
            
            const { rows } = await postgres.query('INSERT INTO auth_users (login, password) values ($1, $2) RETURNING *',
                [login, hashPass]  
            );
            return (rows[0]);
        } return null;
    };

    async deleteUser( id ) {
        const deletedUser = await UserServices.deleteUser( id );
        return deletedUser;
    };
    
};

module.exports = new UserControllers();