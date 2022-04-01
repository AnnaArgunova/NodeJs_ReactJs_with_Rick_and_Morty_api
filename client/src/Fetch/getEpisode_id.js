function getEpisodeId(id) {
    return fetch(`http://localhost:5000/episode/${id}`)
        .then(response => response.json()).then(res=> res.episode)
}

module.exports = getEpisodeId;