const FileStore = require('./store');
const fs = require("fs");

describe('FileStore', () => {
    describe('GET', () => {
        test("Should return session", () => {
            const store = new FileStore();

            store.get('MOCK-TEST_SESSION---------------', (err, data) => {
                expect(data.token).toBe('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZG1pbiI6ZmFsc2UsImdyb3VwcyI6W10sImlkIjo0MDZ9.vqCFU_mrvEgYsh5atF-I9nm552v34We-z3NvP2rp5r0')
            })
        });

        test('Should return null', () => {
            const store = new FileStore();

            store.get('MOCK-TEST_SESSION----1----------', (err, data) => {

                expect(data).toBeNull()
            });
        });

        describe('SET', () => {
            test("Should create file", () => {
                const store = new FileStore();

                store.set('MOCK-TEST_SESSION----2----------', 'MOCK_TEST', () => {
                });

                const file = fs.readFileSync(`./sessions/tmp/MOCK-TEST_SESSION----2----------.json`, 'utf8');

                expect(file).toBe("\"MOCK_TEST\"")
            });

            test("Should update file", () => {
                const store = new FileStore();

                store.set('MOCK-TEST_SESSION', 'MOCK_TEST', () => {
                });
                const file = fs.readFileSync(`./sessions/tmp/MOCK-TEST_SESSION.json`, 'utf8');
                expect(file).toBe("\"MOCK_TEST\"")

                store.set('MOCK-TEST_SESSION', 'MOCK_TEST_UPDATE', () => {
                })
                const fileUpdate = fs.readFileSync(`./sessions/tmp/MOCK-TEST_SESSION.json`, 'utf8');
                expect(fileUpdate).toBe("\"MOCK_TEST_UPDATE\"")
            })
        });

        describe("DESTROY", () => {
            test("Should delete old session", () => {
                const store = new FileStore();

                store.set('MOCK-TEST_OLD_SESSION', 'MOCK_TEST', () => {
                });

                store.destroy('MOCK-TEST_OLD_SESSION', () => {
                })

                store.get('MOCK-TEST_OLD_SESSION', (err, data) => {
                    expect(data).toBeNull()
                });
            })
        })
    })
})

