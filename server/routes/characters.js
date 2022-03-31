const fetch = require("node-fetch");
const config = require("../config");

const characters = (req, res) => {
    fetch(`${config.api}/api/character`)
        .then(res=>res.json())
        .then(data=>{
            res.send({ express: data });
        });
};

module.exports = characters;