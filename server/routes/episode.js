const fetch = require("node-fetch");
const config = require("../config");
const getEpisodeCard = require("../lib/getEpisodeCard");
const getPagination = require("../lib/getPagination");

const episodes = (req, res) => {
    const url = req.params["page"] ? `${config.api}/api/episode?page=${req.params["page"]}` : `${config.api}/api/episode`
    fetch(url)
        .then(res=>res.json())
        .then(data=>{
            const episodes = getEpisodeCard(data.results);
            const pagination = getPagination(data.info, '/episodes');
            res.send({ express: {episodes, pagination} });
        });
};

module.exports = episodes;