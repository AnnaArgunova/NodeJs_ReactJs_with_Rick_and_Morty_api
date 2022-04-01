function getCharacters(page) {
    const url = page ? `http://localhost:5000/characters/${page}` : 'http://localhost:5000/characters'

    return fetch(url)
        .then(response => response.json()).then(res=> res.express)
}

module.exports = getCharacters;