class YoutubeServices {

    async createYoutubeResp(response) {
        return new Promise((res, rej) => {

            const { nextPageToken, prevPageToken = null } = response.data;
            const { items } = response.data;
            const result = items.map(i => {
                const { snippet } = i;
                const { videoId } = i.id;
                const { thumbnails, channelTitle, title } = snippet;

                return { 
                    id: videoId, 
                    videoUrl: `${process.env.YOUTUBEURL}watch?v=${videoId}`, 
                    img: thumbnails, 
                    channel: channelTitle, 
                    title: title,
                    prev: prevPageToken,
                    next: nextPageToken
                };
            });
            res(result);

        })
    }

};

module.exports = new YoutubeServices();