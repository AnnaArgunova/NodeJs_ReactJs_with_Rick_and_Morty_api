describe('getCharacters_pages', () => {
    const fetchData = require("./getCharacters_pages");

    const setData = jest.fn();

    jest.mock("./getCharacters_pages", () => () => {
        return Promise.resolve(require(`./getCharacters_mock.json`));
    });

    it('Get data', () => {
        fetchData(setData).then(res => {
            expect(res).toEqual({"name": "name"});
        });
    });
});
