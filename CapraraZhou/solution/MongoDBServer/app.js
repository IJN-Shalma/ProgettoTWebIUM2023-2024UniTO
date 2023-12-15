var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const database = require("./databases/database");

const mongodb = 'mongodb://localhost:27017/FootballXData';

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

app.use('/appearances', appearancesRouter);
app.use('/club_games', clubGamesRouter);
app.use('/game_events', gameEventsRouter);
app.use('/game_lineups', gameLineupsRouter);
app.use('/games', gamesRouter);


module.exports = app;
