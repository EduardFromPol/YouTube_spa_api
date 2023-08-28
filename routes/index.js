const router = require('express').Router();

const authorizationRoutes = require('./authorizationRoutes.js');
router.use('/authorization', authorizationRoutes);

const youtubeRoutes = require('./youtubeRoutes.js');
router.use('/youtube', youtubeRoutes);

const searchListRoutes = require('./searchListRoutes.js');
router.use('/searchList', searchListRoutes);

const favoritesRoutes = require('./favoritesRoutes.js');
router.use('/favorites', favoritesRoutes);

module.exports = router;