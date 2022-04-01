describe('getEpisodes', () => {
    const fetchData = require("./getEpisodes");

    const setData = jest.fn();

    jest.mock("./getEpisodes", () => () => {
        return Promise.resolve(require(`./getCharacters_mock.json`));
    });
    it('Get data', () => {
        fetchData(setData).then(res => {
            expect(res).toEqual({"name": "name"});
        });
    });
});
