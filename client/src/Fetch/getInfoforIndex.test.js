describe('getInfoForIndex', () => {
    const fetchData = require("./getInfoForIndex");

    const setData = jest.fn();

    jest.mock("./getInfoForIndex", () => () => {
        return Promise.resolve(require(`./getCharacters_mock.json`));
    });

    it('Get data', () => {
        fetchData(setData).then(res => {
            expect(res).toEqual({"name": "name"});
        });
    });
});
