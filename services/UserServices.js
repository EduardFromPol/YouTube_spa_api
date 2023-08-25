// const fs = require('fs');
// const AuthModel = require('../models/authModel.js');
const { Auth } = require('../models/_models.js');

class UserServices {

    async allUsers() {
        return new Promise((res, rej) => {
            Auth.findAll().then(users => res(users));
        })
    }

    async findUserByLogin(login) {
        console.log(login);
        return new Promise((res, rej) => {

            Auth.findOne({ where: { login: login } }).then(data => {
                res(data)
            });

            // fs.readFile('./jsonAuthUsers/jsonAuthUsers.json', (err, stringData) => {
            //     if(err) throw new Error(err);
            //     const data = JSON.parse(stringData);
            //     const user = data.find(i => i.login === login);
            //     res(user);
            // })
        });
    };

    async createUser(body) {
        return new Promise(async (res, rej) => {

            Auth.create(body).then(data => res(data));

            // const user = new AuthModel(body);
            // user.save();
            // res(user);


            // fs.readFile('./jsonAuthUsers/jsonAuthUsers.json', 'utf8', (err, stringData) => {
            //     if(err) throw new Error(err);
            //     const data = JSON.parse(stringData);
            //     data.push({id: data.length, ...body});
            //     fs.writeFile('./jsonAuthUsers/jsonAuthUsers.json', JSON.stringify(data), (err) => {
            //         if(err) throw new Error(err);
            //         res(body);
            //     })
            // })
        })
    };

    async deleteUser(id) {
        return new Promise((req, res) => {
            Auth.destroy({ where: { id }}).then(result => res(result));
        })
    }
};

module.exports = new UserServices();