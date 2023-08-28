const { Favorites } = require('../models/_models.js');

class FavoritesServices {

    async getAllFavorites() {
        return new Promise((res, rej) => {

            Favorites.findAll({ where: {}}).then(data => res(data));
            
        })
    };

    async createFavorite(obj) {
        return new Promise((res, rej) => {

            Favorites.create(obj).then(data => res(data));

        })
    };

};

module.exports = new FavoritesServices();