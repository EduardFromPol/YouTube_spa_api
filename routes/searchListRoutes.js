const router = require('express').Router();
const SearchListController = require('../controllers/SearchListController.js');
const validation = require('../helpers/validation.js');


/**
 * @swagger
 * /api/searchList:
 *   get:
 *     summary: Get search list
 *     description: Get search list
 *     tags: [Search List]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Seccess
 *       '403':
 *         description: Forbidden
 */

router.get('/', validation, SearchListController.getList);


/**
 * @swagger
 * /api/searchList/create:
 *   post:
 *     summary: Create search list
 *     description: Create Search list
 *     tags: [Search List]
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

router.post('/create', validation, SearchListController.createList)

module.exports = router;