require('dotenv').config();
const UserServices = require('../services/UserServices.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


class UserControllers {

    async allUsers() {
        const users = await UserServices.allUsers();
        return users;
    }

    async login(login, password) {
        const finderUser = await UserServices.findUserByLogin(login);
        const id = finderUser.id;
        if(finderUser) {
            const comparePass = await bcrypt.compare(password, finderUser.password);
            if(comparePass) {
                const token = jwt.sign({ id }, process.env.SECRET_ACCESS_TOKEN);
                return token;
            } else {
                return { message: 'invalid token' };
            }
        } else { 
            return null;
        }
    };

    async register(login, password) {
        const finderUser = await UserServices.findUserByLogin(login);
        if(!finderUser) {
            const salt = await bcrypt.genSalt(10);
            const hashPass = await bcrypt.hash(password, salt);
            const createdUser = await UserServices.createUser({
                login, 
                password: hashPass
            });
            return createdUser;
        } return null;
    };

    async deleteUser(id) {
        const deletedUser = await UserServices.deleteUser(id);
        return deletedUser;
    }
};

module.exports = new UserControllers();