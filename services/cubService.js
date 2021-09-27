const Cube = require('../models/Cube');
const dbCub = require('../config/database.json');
const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');

function getAll(query){

    let result = dbCub;

    if(query.search){
        result = result.filter((x) => x.name.toLowerCase().includes(query.search));
    }

    if(query.from){
        result = result.filter((x) => Number(x.difficulty) >= query.from);
    }

    if(query.to){
        result = result.filter((x) => Number(x.difficulty) <= query.to);
    }

    return result;

};

function getOne(cubeId){

    let result = dbCub.find((x) => x.cubeId === cubeId);

    return result;
};

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
    getOne,
    create
}

module.exports = cubeService;