require('dotenv').config();
const { Favorites } = require('../models/_models.js');

// process.env.BASEAPIURL
// process.env.YOUTUBEAPIKEY


class FavoritesServices {

    async getAllFavorites() {
        return new Promise(async (res, rej) => {

            Favorites.findAll({ where: {}}).then(data => res(data));

        })
    };

    async createFavorite( obj ) {
        return new Promise(async (res, rej) => {

            Favorites.create(obj).then(data => res(data));

        })
    };

};

module.exports = new FavoritesServices();