const fetch = require("node-fetch");
const config = require("../config");
const getCharacterById = require("../lib/getCharacter_id");

const characterId = (req, res) => {
    fetch(`${config.api}/api/character/${req.params["id"]}`)
        .then(res => res.json())
        .then(data => {
            getCharacterById(data)
                .then(result => {
                    res.send({character: result});

                });
        });
}

module.exports = characterId;