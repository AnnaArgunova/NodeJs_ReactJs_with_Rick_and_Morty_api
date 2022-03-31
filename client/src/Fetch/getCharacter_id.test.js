describe('getCharacter_id', () => {
    const fetchData = require("./getCharacter_id");

    const setData = jest.fn();

    jest.mock("./getCharacter_id", () => () => {
        return Promise.resolve(require(`./getCharacters_mock.json`));
    });
    it('Get data', () => {
        fetchData(setData).then(res => {
            expect(res).toEqual({"name": "name"});
        });
    });
});
