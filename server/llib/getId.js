const getId = (data) => {

   return data.map(items =>{
        return items.split('/').reverse()[0]
    })
}

module.exports = getId;