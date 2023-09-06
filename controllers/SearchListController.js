const SearchListServices = require('../services/SearchListServices.js');

class SearchListController {

    async getList( id ) {
        const searchList = await SearchListServices.getList( id );
        return searchList; 
    };

    async createList( search, id ) {
        const createdList = await SearchListServices.createList( search, id );
        return createdList;
    };

};

module.exports = new SearchListController();