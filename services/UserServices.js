const { Auth } = require('../models/_models.js');
const postgres = require('../config/db.js');

class UserServices {

    async allUsers() {
        return new Promise((res, rej) => {

            Auth.findAll().then(users => res(users));
            const { rows } = postgres.query('SELECT * FROM auth_users');
            res(rows); 
            
        })
    }

    async findUserByLogin(login) {
        return new Promise(async (res, rej) => {

            // Auth.findOne({ where: { login: login } }).then(data => {
            //     res(data)
            // });

            const { rows } = await postgres.query('SELECT * FROM auth_users WHERE login = $1 LIMIT 1', [login]);
            res(rows[0]);
        });
    };

    async createUser(body) {
        return new Promise(async (res, rej) => {

            const { login, password } = body;

            // Auth.create(body).then(data => res(data));
            const { rows } = await postgres.query(
                'INSERT INTO auth_users (login, password) values ($1, $2) RETURNING *',
                [login, password]  
            );
            res(rows[0]);

        })
    };

    async deleteUser(id) {
        return new Promise( async (req, res) => {

            // Auth.destroy({ where: { id }}).then(result => res(result));
            // const deleteUser = await postgres.query()
            const { rows } = await postgres.query('DELETE FROM auth_users WHERE id=$1 RETURNING *', [id]);
            res(rows);

        })
    }
};

module.exports = new UserServices();