const getCharacterCard = (character) => {
         return character.map(item => {
            return {
                image: item.image,
                name: item.name,
                id: item.id,
            }
        })
  }

module.exports = getCharacterCard;