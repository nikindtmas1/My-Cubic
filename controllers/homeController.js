const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/cubics');
});

router.get('/about', (req, res) => {
    res.render('about', {layout: false});
});

module.exports = router;