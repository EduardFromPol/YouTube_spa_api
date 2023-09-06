const FavoritesServices = require('../services/FavoritesServices.js');

class FavoritesController {
    
    async getAllFavorites() {
        const favorites = await FavoritesServices.getAllFavorites();
        return favorites;
    };

    async createFavorite( search, id ) {
        const createdFavorite = await FavoritesServices.createFavorite( search, id );
        return createdFavorite;
    };

};

module.exports = new FavoritesController();