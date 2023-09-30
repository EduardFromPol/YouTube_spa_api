require('dotenv').config();
const router = require('express').Router();
const validation = require('../helpers/validation.js');
const UserControllers = require('../controllers/UserControllers.js');
const YoutubeControllers = require('../controllers/YoutubeControllers.js');



/**
 * @swagger
 * /api/youtube/users:
 *   get:
 *     summary: Get all authorization users
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

router.get('/users', UserControllers.allUsers);


/**
 * @swagger
 * /api/youtube/search/{maxResult}:
 *   get:
 *     summary: Get Youtube video
 *     description: Get Youtube video
 *     tags: [YoutubeSPA]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: q
 *         in: query
 *         description: Search words
 *         required: true
 *       - name: maxResult
 *         in: path
 *         description: Enter max result
 *         require: true
 *     schema:
 *       type: string
 *     responses:
 *       '200':
 *         description: Seccess 
 *       '403':
 *         description: Forbidden
 */

router.get('/search/:maxResult', validation, YoutubeControllers.searchYoutubeVideo);


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

router.delete('/deleteUser', validation, UserControllers.deleteUser)

module.exports = router;