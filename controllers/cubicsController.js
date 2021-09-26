const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/create', (req, res) => {
    res.render('create', {layout: false});
});

router.get('/details/:id', (req, res) => {
    res.render('details', {layout: false});
});

router.get('*', (req, res) => {
    res.render('404', {layout: false});
});
module.exports = router;