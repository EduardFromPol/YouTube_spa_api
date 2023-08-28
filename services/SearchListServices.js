const { SearchList } = require('../models/_models.js');

class SearchListServices {

    async getList(id) {
        return new Promise((res, rej) => {

            SearchList.findAll({ where: { authuser_id: id } }).then(data => res(data));

        });
    };

    async createList(obj) {
        return new Promise((res, rej) => {

            SearchList.create(obj).then(data => res(data));
            
        })
    };
    
};

module.exports = new SearchListServices();