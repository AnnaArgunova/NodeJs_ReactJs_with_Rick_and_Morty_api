const getId = require("./getId");
const getCharacterById = require("../fetch/getCharacterById");
const getCharacterCard = require("./getCharacterCard");

const getEpisodeId = async (episode) => {

    const ids = getId(episode.characters);
    let characters;

    await getCharacterById(ids, (data) => {
        characters = getCharacterCard(data);
    });

    return {
        name: episode.name,
        air_date: episode.air_date,
        episode: episode.episode,
        created: episode.created,
        characters,
    }
}

module.exports = getEpisodeId;