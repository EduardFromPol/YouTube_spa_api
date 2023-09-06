const { Favorites } = require('../models/_models.js');
const postgres = require('../config/db.js');

class FavoritesServices {

    async getAllFavorites() {
        return new Promise(async (res, rej) => {

            // Favorites.findAll({ where: {}}).then(data => res(data));
            const { rows } = await postgres.query('SELECT * FROM favorite_lists');
            res(rows); 
        })
    };

    async createFavorite( search, id ) {
        return new Promise(async (res, rej) => {

            // Favorites.create(obj).then(data => res(data));
            const { rows } = await postgres.query(
                'INSERT INTO favorite_lists (search, authuser_id) VALUES ($1, $2) RETURNING *',
                [search, id]
            );
            res(rows[0]);
        })
    };

};

module.exports = new FavoritesServices();