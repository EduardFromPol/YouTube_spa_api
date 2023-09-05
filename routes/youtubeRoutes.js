require('dotenv').config();
const router = require('express').Router();
const UserControllers = require('../controllers/UserControllers.js');
const validation = require('../helpers/validation.js')
const postgres = require('../config/db.js');






/**
 * @swagger
 * /api/youtube/users:
 *   get:
 *     summary: Test
 *     description: Get all users
 *     tags: [YoutubeSPA]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Seccess
 *       '403': 
 *         description: Forbidden
 */

router.get('/users', validation, async (req, res) => {
    try {
        // const users = await UserControllers.allUsers();
        // res.send(users);

        const users = await postgres.query('SELECT * FROM auth_users');
        res.send(users.rows);

    } catch (error) {
        res.json(error);
    };
});



/**
 * @swagger
 * /api/youtube/:
 *   get:
 *     summary: Get Youtube video
 *     description: Get Youtube video
 *     tags: [YoutubeSPA]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Seccess 
 *       '403':
 *         description: Forbidden
 */

router.get('/', validation, (req, res) => {
    try {
        res.send(req.userId);
    } catch (error) {
        res.json(error);
    };
});



/**
 * @swagger
 * /api/youtube/deleteUser:
 *   delete:
 *     summary: Delete user which was login
 *     description: Delete user
 *     tags: [YoutubeSPA]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Seccess 
 *       '403':
 *         description: Forbidden
 */

router.delete('/deleteUser', validation, async (req, res) => {
    try {
        const { id } = req.userId;
        const deletedUser = await UserControllers.deleteUser(id);
        res.send(deletedUser);

        // const { rows } = await postgres.query('DELETE FROM auth_users WHERE id=$1 RETURNING *', [id]);
        // res.send(rows);

    } catch (error) {
        res.json(error);
    }
})

module.exports = router;