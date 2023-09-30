require('dotenv').config();
const UserServices = require('../services/UserServices.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


class UserControllers {

    async allUsers( req, res ) {
        try {
            
            const users = await UserServices.allUsers();
            res.send(users);
            
        } catch (error) {
            res.json(error);
        }
    }

    async login( req, res ) {
        try {

            const { login, password } = req.body;
            const finderUser = await UserServices.findUserByLogin( login );
            if(finderUser) {
                const id = finderUser.id;
                const comparePass = await bcrypt.compare( password, finderUser.password );
                if( comparePass ) {
                    const token = jwt.sign({ id }, process.env.SECRET_ACCESS_TOKEN);
                    res.send(token);
                } else {
                    res.json({ message: 'invalid token' });
                }
            } else {
                res.sendStatus(400);
            }

        } catch (error) {
            res.json(error);
        }

    };

    async register( req, res ) {
        try {
            const { login, password } = req.body;

            const finderUser = await UserServices.findUserByLogin( login );      
            if(!finderUser) {
                const salt = await bcrypt.genSalt(10);
                const hashPass = await bcrypt.hash( password, salt );
                const createdUser = await UserServices.createUser({
                    login, 
                    password: hashPass
                });
                res.send(createdUser);
            } else {
                res.sendStatus(400);
            };
            
        } catch (error) {
            res.json(error);
        }
    };

    async deleteUser( req, res ) {
        try {

            const { id } = req.userId;
            const deletedUser = await UserServices.deleteUser( id );
            res.send(deletedUser);
            
        } catch (error) {
            res.json(error);
        }
    };
    
};

module.exports = new UserControllers();