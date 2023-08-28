<<<<<<< HEAD
const SearchListServices = require('../services/SearchListServices.js');

class SearchListController {

    async getList(id) {
        const searchList = await SearchListServices.getList(id);
        return searchList; 
    };

    async createList(obj) {
        const createdList = await SearchListServices.createList(obj);
        return createdList;
    };

};

=======


class SearchListController {
    async getList() {
        const searchList = await SearchListServices.getList();
        return searchList; 
    };
};

>>>>>>> 2e349abcf48689852b1d88a3f475f7cc0c30b15a
module.exports = new SearchListController();