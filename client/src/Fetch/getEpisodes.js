function getEpisodes(page) {
    const url = page ? `http://localhost:5000/episodes/${page}` : 'http://localhost:5000/episodes'
    return fetch(url)
        .then(response => response.json()).then(res=> {
           return res.express
        })
}

module.exports = getEpisodes;