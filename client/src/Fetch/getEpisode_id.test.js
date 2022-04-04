describe('getEpisodeId', () => {
    const fetchData = require("./getEpisode_id");

    const setData = jest.fn();

    jest.mock("./getEpisode_id", () => () => {
        return Promise.resolve(require(`./getCharacters_mock.json`));
    });
    it('Get data', () => {
        fetchData(setData).then(res => {
            expect(res).toEqual({"name": "name"});
        });
    });
});
