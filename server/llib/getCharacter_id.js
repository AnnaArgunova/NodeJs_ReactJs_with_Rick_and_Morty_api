const getId = require("./getId");
const getEpisodeById = require("../fetch/getEpisodesById");
const getEpisodeCard = require("./getEpisodeCard");

const getCharacterById = async (character) => {
    const ids = getId(character.episode);

    let episode;
    await getEpisodeById(ids, (data) => {

        episode = getEpisodeCard(data);
    });

    return {
        name: character.name,
        image: character.image,
        gender: character.gender,
        species: character.species,
        status: character.status,
        episode,
    }
}

module.exports = getCharacterById;