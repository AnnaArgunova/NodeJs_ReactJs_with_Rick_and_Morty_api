function getCharacters_pages(page) {
    return fetch(`http://localhost:5000/characters/${page}`)
        .then(response => response.json()).then(res=> res.character)
}

module.exports = getCharacters_pages;