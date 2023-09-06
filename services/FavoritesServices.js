const { Favorites } = require('../models/_models.js');
const postgres = require('../config/db.js');

class FavoritesServices {

    async getAllFavorites() {
        return new Promise(async (res, rej) => {

            Favorites.findAll({ where: {}}).then(data => res(data));
            const favorites = await postgres.query('SELECT * FROM favorite_lists');
            res(favorites); 
        })
    };

    async createFavorite( search, id ) {
        return new Promise(async (res, rej) => {

            // Favorites.create(obj).then(data => res(data));
            const createdFavorite = await postgres.query(
                'INSERT INTO favorite_lists (search, authuser_id) VALUES ($1, $2)',
                [search, id]
            );
            res(createdFavorite);
        })
    };

};

module.exports = new FavoritesServices();