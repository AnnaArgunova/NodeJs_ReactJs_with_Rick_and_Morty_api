const getPagination = (value, link) =>{

    const active = value.next ? +value.next.split('=').reverse()[0] - 1
        : +value.prev.split('=').reverse()[0] + 1;

    const pages = [];

    for (let i = 1; i <= value.pages; i++) {
        if (i === 1) {
            pages.push({page: i, link: link, active});
        } else {
            pages.push({page: i, link: `${link}/${i}`, active});
        }
    }

    return {
        pages,
    }
}

module.exports = getPagination;