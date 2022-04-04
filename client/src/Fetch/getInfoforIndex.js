function getInfoForIndex() {
    return fetch('http://localhost:5000/index')
        .then(response => response.json()).then(res=> {
            return res;
        });
}

module.exports = getInfoForIndex;