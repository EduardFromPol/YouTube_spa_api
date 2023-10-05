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

module.exports = router;