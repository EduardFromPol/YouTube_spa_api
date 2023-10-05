const YoutubeServices = require('../services/YoutubeServices.js');
const SearchListServices = require('../services/SearchListServices.js');
const FavoritesServices = require('../services/FavoritesServices.js');

const { google } = require('googleapis');
const youtube = google.youtube({
    version: 'v3',
    auth: process.env.YOUTUBEAPIKEY,
});


class YoutubeControllers {

    async searchYoutubeVideo( req, res ){
        try {
            
            const { q } = req.query;
            const { id } = req.userId;
            const { maxResult } = req.params;

            youtube.search.list({
                part: 'snippet',
                query: q,
                type: 'video',
                maxResults: +maxResult
            }).then(async response => {
    
                const obj = { search: q, authuser_id: id };
                await SearchListServices.createList(obj);

                const result = await YoutubeServices.createYoutubeResp(response)
                res.send(result);
    
            });

        } catch (error) {
            res.json(error);
        }
    };

};

module.exports = new YoutubeControllers();