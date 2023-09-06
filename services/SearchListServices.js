const postgres = require('../config/db.js');
// const { SearchList } = require('../models/_models.js');

class SearchListServices {

    async getList(id) {
        return new Promise( async (res, rej) => {

            // SearchList.findAll({ where: { authuser_id: id } }).then(data => res(data));
            const allLists = await postgres.query(
                'SELECT * FROM search_lists WHERE id = $1', 
                [id]
            )
            res(allLists);

        });
    };

    async createList( search, id ) {
        return new Promise( async (res, rej) => {

            // SearchList.create(obj).then(data => res(data));

            const createdList = await postgres.query(
                'INSERT INTO search_lists (search, authuser_id) VALUES ($1, $2) RETURNING *',
                [search, id]
            )
            res(createdList);
        })
    };
    
};

module.exports = new SearchListServices();