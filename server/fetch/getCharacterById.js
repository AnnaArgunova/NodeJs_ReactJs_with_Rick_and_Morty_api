const fetch = require("node-fetch");
const config = require("../config");

const getCharacterById = (ids, cb) => {
    return fetch(`${config.api}/api/character/${ids}`)
        .then(res => res.json())
        .then(data => cb(data))
}

module.exports = getCharacterById;