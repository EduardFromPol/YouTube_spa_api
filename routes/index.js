const router = require('express').Router();

const authorization = require('./authorization.js');
router.use('/authorization', authorization);

const youtube = require('./youtube.js');
router.use('/youtube', youtube);

module.exports = router;