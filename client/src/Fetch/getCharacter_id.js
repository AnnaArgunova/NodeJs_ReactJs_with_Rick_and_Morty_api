function getCharacterId(id) {
    return fetch(`http://localhost:5000/character/${id}`)
        .then(response => response.json()).then(res=> res.character)
}

module.exports = getCharacterId;