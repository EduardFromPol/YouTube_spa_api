const router = require('express').Router();
const FavoritesController = require('../controllers/FavoritesController.js');
const validation = require('../helpers/validation.js');


/**
 * @swagger
 * /api/favorites:
 *   get:
 *     summary: Get all Favorite list
 *     description: Get all Favorites list
 *     tags: [Favorites]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Seccess
 *       '403':
 *         description: Forbidden
 */

router.get('/', validation, FavoritesController.getAllFavorites);


/**
 * @swagger
 * /api/favorites/create:
 *   post:
 *     summary: Create favorite list
 *     description: Create Favorite list
 *     tags: [Favorites]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               search:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Seccess
 *       '400':
 *         description: Bad request
 *       '403':
 *         description: Forbidden
 */

router.post('/create', validation, FavoritesController.createFavorite)

module.exports = router;