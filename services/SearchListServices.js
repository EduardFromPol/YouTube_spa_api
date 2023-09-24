require('dotenv').config();
const { SearchList } = require('../models/_models.js');

// process.env.BASEAPIURL
// process.env.YOUTUBEAPIKEY

class SearchListServices {

    async getList(id) {
        return new Promise( async (res, rej) => {

            SearchList.findAll({ where: { authuser_id: id } }).then(data => res(data));

        });
    };

    async createList( obj ) {
        return new Promise( async (res, rej) => {

            SearchList.create( obj ).then(data => res(data));

        })
    };
    
};

module.exports = new SearchListServices();