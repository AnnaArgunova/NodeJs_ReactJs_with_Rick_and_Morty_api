function getCharacters() {
    return fetch('http://localhost:5000/characters')
        .then(response => response.json()).then(res=> res.express)
}

module.exports = getCharacters;