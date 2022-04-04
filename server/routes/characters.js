const fetch = require("node-fetch");
const config = require("../config");
const getCharacters = require("../lib/getCharacters");
const getPagination = require("../lib/getPagination");

const characters = (req, res) => {
    const url = req.params["page"] ? `${config.api}/api/character?page=${req.params["page"]}`
        : `${config.api}/api/character`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const characters = getCharacters(data.results);
            const pagination = getPagination(data.info, '/characters');
            res.send({express: {characters, pagination}});
        });
};

module.exports = characters;