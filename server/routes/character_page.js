const fetch = require("node-fetch");
const config = require("../config");

const characterPage = (req, res) => {
    fetch(`${config.api}/api/character?page=${req.params["page"]}`)
        .then(res=>res.json())
        .then(data=>{
            res.send({ character: data });
        });
}

module.exports = characterPage;