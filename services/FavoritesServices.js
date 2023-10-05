require('dotenv').config();
const { Favorites } = require('../models/_models.js');


class FavoritesServices {

    async getAllFavorites(id) {
        return new Promise(async (res, rej) => {

            Favorites.findAll({ where: {authuser_id: id}}).then(data => res(data));

        })
    };

    async createFavorite( obj ) {
        return new Promise(async (res, rej) => {

            Favorites.create(obj).then(data => res(data));

        })
    };

};

module.exports = new FavoritesServices();