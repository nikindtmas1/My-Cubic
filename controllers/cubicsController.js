const express = require('express');
const router = express.Router();
const cubeService = require('../services/cubService');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    let currentCube = JSON.stringify(req.body, null, 2);
    console.log(currentCube);

    let {name, description, imageUrl, difficulty} = req.body;
    cubeService.create(name, description, imageUrl, difficulty);
    
    res.redirect('/');
});

router.get('/details/:id', (req, res) => {
    res.render('details');
});


router.get('*', (req, res) => {
    res.render('404');
});
module.exports = router;