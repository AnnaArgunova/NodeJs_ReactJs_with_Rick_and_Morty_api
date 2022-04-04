const express = require('express');
const cors = require('cors');
const Auth = require("./routes/auth");
const config = require('./config');
const session = require('express-session');
const bodyParser = require('body-parser');
const publicAuth = require("./middleware/publicAuth");
const characters = require("./routes/characters");
const characterId = require("./routes/character_id");
const episodeId = require("./routes/episode_id");
const episodes = require("./routes/episode");
const FileStore = require("./sessions/store");
const index = require("./routes");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }))

app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(session({
    path: '/',
    resave: false,
    store: new FileStore(),
    secret: config.sessionSecret,
    saveUninitialized: true,
    cookie: {secure: false, maxAge: 100},
}));

app.use(publicAuth);

app.post('/login', Auth);

app.get('/index', index);

app.get('/characters(/:page)?', characters);

app.get('/episodes(/:page)?', episodes);

app.get('/episode/:id', episodeId);

app.get('/character/:id', characterId);

app.listen(port, () => console.log(`Listening on port ${port}`));
