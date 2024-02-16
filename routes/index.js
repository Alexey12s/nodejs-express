// routes/index.js
const express = require('express');
const router = express.Router();
const _ = require('lodash');

router.get('/', (req, res) => {
    const greeting = _.capitalize('hello apps');
    res.render('index', { greeting });
});

module.exports = router;
