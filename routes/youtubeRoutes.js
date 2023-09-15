require('dotenv').config();
const router = require('express').Router();
const UserControllers = require('../controllers/UserControllers.js');
const validation = require('../helpers/validation.js');


// npm install axios
const youtubeApiKey = 'AIzaSyCcicvMQVrDcHzTHUKaKaddIiofnh8P0f4';
// const baseApiURL = '/...v3'
const baseApiURL = 'https://www.googleapis.com/youtube/v3';
// youtube searchURL -->

// npm install googleapis
const { google } = require('googleapis');
const youtube = google.youtube({
    version: 'v3',
    auth: youtubeApiKey
});


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
        const users = await UserControllers.allUsers();
        res.send(users);

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

router.get('/search?q=cats', validation, async (req, res) => {
    try {
        //
        const { q } = req.query;
        const url = `${baseApiURL}/search?key=${youtubeApiKey}&type=video&part=snipet&q=${q}`;

        // const { data } = await axios.get(url);
        const { data } = await fetch(url);

        console.log('response: ', data) // need items (data.items)
        //
        res.send(result);
    } catch (error) {
        res.json(error);
    };
});

router.get('/search?q=cats', validation, async (req, res) => {
    try {
        const { q } = req.query;
        const response = await youtube.search.list({
            part: 'snipet',
            q: q,
            type: 'video'
        });
        const titles = response.data.items.map(i => i.snipet.title);
        res.send(titles);
    } catch (error) {
        res.json(error);
        // next(error);
    }
})



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

    } catch (error) {
        res.json(error);
    }
})

module.exports = router;