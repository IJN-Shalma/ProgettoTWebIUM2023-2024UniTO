var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const database = require("./databases/database");
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

var appearancesRouter = require('./routes/appearances');
var clubGamesRouter = require('./routes/club_games');
var gameEventsRouter = require('./routes/game_events');
var gameLineupsRouter = require('./routes/game_lineups');
var gamesRouter = require('./routes/games');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'FootballXData Mongoose API',
            description: "Documentation for Mongo API that accesses frequently changing datasets",
            version: "1.0.0"
        },
    },
    apis: ["./routes/*.js","./models/*.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/appearances', appearancesRouter);
app.use('/club_games', clubGamesRouter);
app.use('/game_events', gameEventsRouter);
app.use('/game_lineups', gameLineupsRouter);
app.use('/games', gamesRouter);



module.exports = app;
