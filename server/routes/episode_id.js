const fetch = require("node-fetch");
const config = require("../config");
const getEpisodeId = require("../lib/getEpisode_id");

const episodeId = (req, res) => {
    fetch(`${config.api}/api/episode/${req.params["id"]}`)
        .then(response => response.json())
        .then(data => {
            getEpisodeId(data)
                .then(result=>{
                    res.send({episode: result});
                });
        });
};

module.exports = episodeId;