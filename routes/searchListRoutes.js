const router = require('express').Router();
const { SearchList } = require('../models/_models.js');
// const SearchListController = require('../controllers/SearchListController.js');
const validation = require('../helpers/validation.js');


/**
 * @swagger
 * /api/searchList:
 *   get:
 *     summary: Get
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

router.get('/', validation, async (req, res) => {
    try {
        SearchList.findAll({ where: { id: userId }}).then(data => res.send(data));
        // const searchList = await SearchListController.getList();
        // res.send(searchList);
    } catch (error) {
        res.json(error);
    };
});


/**
 * @swagger
 * /api/searchList/create:
 *   post:
 *     summary: Create
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

router.post('/create', validation, async (req, res) => {
    try {
        const obj = {search: req.body.search, authuser_id: req.userId.id}
        // console.log(obj);
        SearchList.create(obj).then(data => res.send(data));
        // SearchListController.createList(req.body).then(data => res.send(data));
    } catch (error) {
        res.json(error);
    }
})

module.exports = router;