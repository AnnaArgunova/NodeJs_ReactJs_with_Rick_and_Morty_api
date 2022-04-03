const getId = require("./getId");
const getCharacterById = require("../fetch/getCharacterById");
const getCharacterCard = require("./getCharacterCard");

const getEpisodeId = async (episode) => {

    const ids = getId(episode.characters);
    let characters;


    await getCharacterById(ids, (data) => {
        characters = getCharacterCard(data);
    });

    const season = episode.episode.split('S')[1].split('E')[0];

    const series = episode.episode.split('E')[1];

    const date = new Date(episode.created);

    const created = `${date.getMonth() < 10 ? `0${date.getUTCMonth()}` : date.getMonth()}.${date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()}.${date.getFullYear()}`

    return {
        name: episode.name,
        air_date: episode.air_date,
        season,
        series,
        created,
        characters,
    }
}

module.exports = getEpisodeId;