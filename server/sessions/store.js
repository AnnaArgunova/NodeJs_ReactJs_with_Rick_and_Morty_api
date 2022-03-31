const Store = require("express-session").Store;
const fs = require('fs');
const path = require('path')
const dirPath = path.join(__dirname, '/tmp');

class FileStore extends Store {

    get(sid, callback) {
        try {
            let data = fs.readFileSync(
                `${dirPath}/${sid}.json`,
                'utf8');

            data=JSON.parse(data)
            return callback(null, data);

        } catch (err) {
            if (err.code === 'ENOENT') {
                return callback(null, null);
            }
            return callback(err);
        }
    }

    set(sid, session, callback) {
        session = JSON.stringify(session)

        fs.writeFileSync(
            `${dirPath}/${sid}.json`,
            session,
            function (err) {
                if (err) {
                    throw err;
                }
            }
        );

        callback();
    }

    destroy(sid, callback) {
        fs.unlinkSync(`${dirPath}/${sid}.json`);

        callback();
    }
}

module.exports = FileStore;
