const fetch = require("node-fetch");
const config = require("../config");
const getCharacters = require("../lib/getCharacters");
const getEpisodes = require("../fetch/getEpisodes");

const index = (req, res) => {
    fetch(`${config.api}/api/character`)
        .then(response => response.json())
        .then(data => {
            const characters = getCharacters(data.results);
            getEpisodes().then(episodes=>{
                res.send({ express: {characters, episodes} });
            });
        });

};

module.exports = index;