// TODO: Require Controllers...
const homePage = require('../controllers/homeController');

module.exports = (app) => {
    // TODO...

    app.use('/', homePage);
};