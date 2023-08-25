const { SearchList } = require('../models/_models.js');

class SearchListServices {
    async getList() {
        return new Promise((res, rej) => {
            SearchList.findAll().then(data => res(data));
        });
    };
};

module.exports = new SearchListServices();