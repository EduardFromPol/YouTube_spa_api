const { Auth } = require('../models/_models.js');
// const postgres = require('../config/db.js');

class UserServices {

    async allUsers() {
        return new Promise((res, rej) => {

            Auth.findAll().then(users => res(users));
            
        })
    }

    async findUserByLogin(login) {
        return new Promise(async (res, rej) => {

            Auth.findOne({ where: { login: login } }).then(data => {
                res(data)
            });

            // const data = await postgres.query('SELECT * FROM auth_users WHERE login = $1 LIMIT 1', [login]);
            // res(data.rows);
        });
    };

    async createUser(body) {
        return new Promise(async (res, rej) => {

            Auth.create(body).then(data => res(data));

        })
    };

    async deleteUser(id) {
        return new Promise((req, res) => {

            Auth.destroy({ where: { id }}).then(result => res(result));
            // const deleteUser = await postgres.query()

        })
    }
};

module.exports = new UserServices();