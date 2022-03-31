const fetch = require("node-fetch");
const config = require("../config");

const episodes = (req, res) => {

    fetch(`${config.api}/api/episodes`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            res.send({ express: data });
        });
};

module.exports = episodes;