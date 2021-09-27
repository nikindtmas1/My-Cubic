const express = require('express');
const router = express.Router();
const cubeService = require('../services/cubService');

router.get('/', (req, res) => {
    let cubics = cubeService.getAll();
    res.render('index', {title: 'Brows', cubics});
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', validateData, (req, res) => {
    let currentCube = JSON.stringify(req.body, null, 2);
    console.log(currentCube);

    let data = req.body;
    cubeService.create(data);
    
    res.redirect('/');
});

router.get('/details/:cubeId', (req, res) => {

    let cube = cubeService.getOne(req.params.cubeId)
    res.render('details', {title: 'Details', cube});
});


router.get('*', (req, res) => {
    res.render('404');
});

function validateData(req, res, next){
    let isValid = true;

    if( req.body.name.trim().length < 2 ){
        isValid = false;
    }else if(!req.body.imageUrl){
        isValid = false;
    }

    if(isValid){
        next();
    }
}

module.exports = router;