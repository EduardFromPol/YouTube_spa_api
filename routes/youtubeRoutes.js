require('dotenv').config();
const router = require('express').Router();
const UserControllers = require('../controllers/UserControllers.js');
const validation = require('../helpers/validation.js');
const SearchListController = require('../controllers/SearchListController.js');
const FavoritesController = require('../controllers/FavoritesController.js');


// npm install axios
const youtubeApiKey = 'AIzaSyCcicvMQVrDcHzTHUKaKaddIiofnh8P0f4';
// const baseApiURL = '/...v3'
// const baseApiURL = 'https://www.googleapis.com/youtube/v3';
// youtube searchURL -->

// npm install googleapis
const { google } = require('googleapis');
const youtube = google.youtube({
    version: 'v3',
    auth: youtubeApiKey,
});


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

router.get('/users', async (req, res) => {
    try {

        const users = await UserControllers.allUsers();
        res.send(users);

    } catch (error) {
        res.json(error);
    };
});


/**
 * @swagger
 * /api/youtube/search:
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
 *     schema:
 *       type: string
 *     responses:
 *       '200':
 *         description: Seccess 
 *       '403':
 *         description: Forbidden
 */

router.get('/search', validation, async (req, res) => {
    try {
        const { q } = req.query;
        const { id } = req.userId;
        const videuUrl = `https://www.youtube.com/`;

        const obj = { search: q, authuser_id: id};

        SearchListController.createList(obj).then(createdSearchList => {
          return createdSearchList;
        });

        FavoritesController.createFavorite(obj).then(createdFavoriteList => {
            return createdFavoriteList;
        });

        youtube.search.list({
            part: 'snippet',
            query: q,
            type: 'video',
        }).then(response => {

            const { nextPageToken } = response.data;
            const prevPageToken = response.data.prevPageToken ?? null; 
            const { items } = response.data;
            const result = items.map(i => {
              const { videoId } = i.id;
              const { snippet } = i;
              const { thumbnails, channelTitle, title } = snippet;
              return { 
                id: videoId, 
                videoUrl: `${videuUrl}watch?v=${videoId}`, 
                img: thumbnails, 
                channel: channelTitle, 
                title: title,
                prev: prevPageToken,
                next: nextPageToken
              }
            });
            
            res.send(result);



        // youtube.search.list({
        //     part: 'snippet',
        //     query: q,
        //     pageToken: result[1].next
        // }).then(data => {
        //     res.send({
        //         next: data.data.nextPageToken,
        //         prev: data.data.prevPageToken
        //     });
        //     // "nextPageToken": "CAoQAA",
        //     // "prevPageToken": "CAUQAQ",
        // });

        // {
            // "next": "CAoQAA",
            // "prev": "CAUQAQ"
        // }

        });
    } catch (error) {
        res.json(error);
        // next(error);
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

    } catch (error) {
        res.json(error);
    }
})

module.exports = router;







// router.get('/search?q=cats', validation, async (req, res) => {
//     try {
//         //
//         const { q } = req.query;
//         const url = `${baseApiURL}/search?key=${youtubeApiKey}&type=video&part=snipet&q=${q}`;

//         // const { data } = await axios.get(url);
//         const { data } = await fetch(url);

//         console.log('response: ', data) // need items (data.items)
//         //
//         res.send(result);
//     } catch (error) {
//         res.json(error);
//     };
// });