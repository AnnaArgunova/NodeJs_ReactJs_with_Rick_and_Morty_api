const fetch = require("node-fetch");
const config = require("../config");

const getEpisodeById = (ids, cb) => {
    return fetch(`${config.api}/api/episode/${ids}`)
        .then(res => res.json())
        .then(data => cb(data))
}

module.exports = getEpisodeById;