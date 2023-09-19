const { Auth, SearchList } = require('../models/_models.js');


class UserServices {

    async allUsers() {
        return new Promise((res, rej) => {

            Auth.findAll().then(users => res(users));
            
        })
    }

    async findUserByLogin(login) {
        return new Promise(async (res, rej) => {

            Auth.findOne({ where: { login: login } }).then(data => {
                res(data);
            });

        });
    };

    async createUser(body) {
        return new Promise(async (res, rej) => {
            
            Auth.create(body).then(data => res(data));

        })
    };

    async deleteUser(id) {
        return new Promise( async (req, res) => {

            Auth.destroy({ where: { id }}).then(result => res(result));
            SearchList.destroy({ where: { id }}).then(deleteResult => {
                console.log(`Search list was deleted with status ${deleteResult}`)
            });
            

        })
    }
};

module.exports = new UserServices();