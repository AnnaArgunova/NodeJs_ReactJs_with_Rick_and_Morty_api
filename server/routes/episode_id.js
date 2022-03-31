const fetch = require("node-fetch");
const config = require("../config");

const episodeId = (req, res) =>{
    fetch(`${config.api}/api/episode/${req.params["id"]}`)
        .then(res=>res.json())
        .then(data=>{
            res.send({ character: data });
        });
};

module.exports = episodeId;