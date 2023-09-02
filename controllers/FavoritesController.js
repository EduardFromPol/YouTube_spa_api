const FavoritesServices = require('../services/FavoritesServices.js');

class FavoritesController {
    
    async getAllFavorites() {
        const favorites = await FavoritesServices.getAllFavorites();
        return favorites;
    };

    async createFavorite( obj ) {
        const createdFavorite = await FavoritesServices.createFavorite( obj );
        return createdFavorite;
    };

};

module.exports = new FavoritesController();