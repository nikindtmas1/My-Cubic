const Cube = require('../models/Cube');
const dbCub = require('../config/database.json');

const create = (name, description, imageUrl, difficulty) => {

    let cube = new Cube(name, description, imageUrl, difficulty);
    dbCub.push(cube);
};

const cubeService = {
    create
}

module.exports = cubeService;