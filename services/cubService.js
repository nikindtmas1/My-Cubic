const Cube = require('../models/Cube');
const dbCub = require('../config/database.json');
const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');

function getAll(){

    let result = dbCub;
    return result;

}

function create(data){
    console.log(dbCub);
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficulty
        );

    dbCub.push(cube);
    let json = JSON.stringify(dbCub, '', 2);

    fs.writeFile(path.join(__dirname, '/../config/database.json'), json, (err) => {
        if(err){
            console.log(err);
            return;
        }
    });
    console.log(dbCub);
};

const cubeService = {
    getAll,
    create
}

module.exports = cubeService;