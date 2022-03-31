const jwt = require("jsonwebtoken");
const users = require('../user.js');
const {accessTokenSecret} = require("../config");


const Auth = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        const accessToken = jwt.sign({ username: user.username,  role: user.role }, accessTokenSecret);

        res.json({
            accessToken
        });
    } else {
        res.send('Username or password incorrect');
    }
}

module.exports = Auth;