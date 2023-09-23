const SearchListServices = require('../services/SearchListServices.js');

class SearchListController {

    async getList( id ) {
        const searchList = await SearchListServices.getList( id );
        return searchList; 
    };

    async createList( obj ) {
        const createdList = await SearchListServices.createList( obj );
        return createdList;
    };

};

module.exports = new SearchListController();