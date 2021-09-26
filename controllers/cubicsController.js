const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.get('/details/:id', (req, res) => {
    res.render('details');
});

router.get('*', (req, res) => {
    res.render('404');
});
module.exports = router;