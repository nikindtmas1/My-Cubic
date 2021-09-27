const Cube = require('../models/Cube');
const dbCub = require('../config/database.json');
const fs = require('fs');

const create = (name, description, imageUrl, difficulty) => {
    console.log(dbCub);
    let cube = new Cube(name, description, imageUrl, difficulty);
    dbCub.push(cube);
    let json = JSON.stringify(dbCub);

    fs.writeFile(path.join(__dirname, '/../config/database.json'), json, (err) => {
        if(err){
            console.log(err);
            return;
        }
    });
    console.log(dbCub);
};

const cubeService = {
    create
}

module.exports = cubeService;