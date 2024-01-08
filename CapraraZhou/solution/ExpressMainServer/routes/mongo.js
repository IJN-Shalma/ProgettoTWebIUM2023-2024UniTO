const express = require('express');
const router = express.Router();

const appearancesRouter = require('./mongo/appearances');
const clubGamesRouter = require('./mongo/clubGames');
const gameEventsRouter = require('./mongo/gameEvents');
const gameLineupsRouter = require('./mongo/gameLineups');
const  gamesRouter = require('./mongo/games');

router.use('/appearances', appearancesRouter);
router.use('/club_games', clubGamesRouter);
router.use('/game_events', gameEventsRouter);
router.use('/game_lineups', gameLineupsRouter);
router.use('/games', gamesRouter);


module.exports = router;