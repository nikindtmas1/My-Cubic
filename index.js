const express = require('express');
const app = express();
//const port = 5000;
const configPort = require('./config/config');

const configExpress = require('./config/express');
configExpress(app);

app.get('/', (req, res) => {

    res.render('index', {layout: false});
    //res.send('<h1>Hello From Express</h1>')
})

app.listen(configPort.development.PORT, ()=> console.log(`Server listening on port: ${configPort.development.PORT}`))