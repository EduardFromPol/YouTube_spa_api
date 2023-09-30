const FavoritesServices = require('../services/FavoritesServices.js');

class FavoritesController {
    
    async getAllFavorites( req, res ) {
        try {

            const favorites = await FavoritesServices.getAllFavorites();
            res.send(favorites);
            
        } catch (error) {
            res.json(error);
        }
    };

    async createFavorite( req, res ) {
        try {

            const { search } = req.body;
            const { id } = req.userId;
            const obj = { search, authuser_id: id };
            const createdFavorite = await FavoritesServices.createFavorite( obj );
            res.send(createdFavorite);
            
        } catch (error) {
            res.json(error);
        }

    };

};

module.exports = new FavoritesController();