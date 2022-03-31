const jwt = require("jsonwebtoken");
const {accessTokenSecret} = require("../config");

const publicAuth = (req, res, next) => {
    const user = req.headers.authorization;

    if (!user) {
        const accessToken = jwt.sign({username: '', role: 'user'}, accessTokenSecret);

        req.headers.authorization = `Bearer ${accessToken}`;
        req.session.user = {username: '', role: 'user'};
        req.session.token = accessToken;
        next();
    } else{
        next();
    }
}
module.exports = publicAuth;