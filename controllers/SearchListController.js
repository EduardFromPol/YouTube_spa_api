const SearchListServices = require('../services/SearchListServices.js');

class SearchListController {

    async getList( req, res ) {
        try {
            
            const { id } = req.userId;
            const searchList = await SearchListServices.getList( id );
            res.send(searchList); 

        } catch (error) {
            res.json(error);
        }
    };

    async createList( req, res ) {
        try {

            const { search } = req.body;
            const { id } = req.userId;
            const obj = { search, authuser_id: id};
            const createdList = await SearchListServices.createList( obj );
            res.send(createdList);
            
        } catch (error) {
            res.json(error);
        }
    };

};

module.exports = new SearchListController();