const router = require('express').Router();
const { Favorites } = require('../models/_models.js');
const validation = require('../helpers/validation.js');


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjkyNjQxNjIzfQ.hnZuQWHFUMtajR2H7tadT-dIR5N8kHt8hutfKEOel-s



/**
 * @swagger
 * /api/favorites:
 *   get:
 *     summary: Get all Favorites
 *     description: Get all Favorites
 *     tags: [Favorites]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Seccess
 *       '403':
 *         description: Forbidden
 */

router.get('/', validation, async (req, res) => {
    try {
        Favorites.findAll({ where: {}}).then(data => res.send(data));
    } catch (error) {
        res.json(error);
    };
});


/**
 * @swagger
 * /api/favorites/create:
 *   post:
 *     summary: Create
 *     description: Create Favorites
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
 *               authuser_id:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: Seccess
 *       '400':
 *         description: Bad request
 *       '403':
 *         description: Forbidden
 */

router.post('/create', validation, async (req, res) => {
    try {
        Favorites.create(req.body).then(data => res.send(data));
    } catch (error) {
        res.json(error);
    }
})

module.exports = router;