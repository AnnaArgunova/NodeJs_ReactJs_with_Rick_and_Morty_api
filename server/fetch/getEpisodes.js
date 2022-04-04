const fetch = require("node-fetch");
const config = require("../config");
const getEpisodeCard = require("../lib/getEpisodeCard");

const getEpisodes = () => {
  return fetch(`${config.api}/api/episode`)
        .then(res=>res.json())
        .then(data=>{
            const episodes = getEpisodeCard(data.results);

            return episodes;
        });
};

module.exports = getEpisodes;