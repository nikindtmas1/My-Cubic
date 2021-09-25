const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {layout: false});
});

router.get('/create', (req, res) => {
    res.render('create', {layout: false});
});

router.get('*', (req, res) => {
    res.render('404', {layout: false});
});
module.exports = router;