const express = require('express');
const app = express();
const port = 5000;

const configExpress = require('./config/express');
configExpress(app);

app.get('/', (req, res) => {

    res.render('index', {layout: false});
    //res.send('<h1>Hello From Express</h1>')
})

app.listen(port, ()=> console.log(`Server listening on port: ${port}`))