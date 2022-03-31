describe('getCharacters', () => {
    const fetchData = require("./getCharacters");

    const setData = jest.fn();

    jest.mock("./getCharacters", () => () => {
        return Promise.resolve(require(`./getCharacters_mock.json`));
    });
    it('Get data', () => {
        fetchData(setData).then(res => {
            expect(res).toEqual({"name": "name"});
        });
    });
});
