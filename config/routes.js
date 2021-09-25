// TODO: Require Controllers...
//const express = require('express');
//const router = express.Router();
const homePage = require('../controllers/homeController');
const cubicsController = require('../controllers/cubicsController');
//const errorPage = require('../views/404.hbs');

module.exports = (app) => {
    // TODO...

    app.use('/', homePage);
    app.use('/cubics', cubicsController)
    // router.get('*', (req, res) => {
    //     res.render('404');
    // });
};