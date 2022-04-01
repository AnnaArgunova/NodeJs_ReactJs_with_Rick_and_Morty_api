const getCharacters = (characters)=>{

    return characters.map(item=>{
        return {
            name: item.name,
            id: item.id,
            image: item.image,
        }
    })
}

module.exports = getCharacters