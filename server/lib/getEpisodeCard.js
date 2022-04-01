const getEpisodeCard = (episode) => {
    if (episode.length) {
        return episode.map(item => {
            return {
                name: item.name,
                id: item.id
            }
        })
    } else {
        return [{
            name: episode.name,
            id: episode.id
        }]
    }
}

module.exports = getEpisodeCard;