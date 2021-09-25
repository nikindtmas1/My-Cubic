// TODO: Require Controllers...



const homePage = require('../controllers/homeController');
const cubicsController = require('../controllers/cubicsController');
//const errorPage = require('../views/404.hbs');

module.exports = (app) => {
    // TODO...

    app.use('/', homePage);
    app.use('/cubics', cubicsController)
  
};