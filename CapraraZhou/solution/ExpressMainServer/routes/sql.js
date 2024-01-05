const express = require('express');
const router = express.Router();

const clubsRouter = require('./sql/clubs');
const competitionsRouter = require('./sql/competitions');
const playersRouter = require('./sql/players');
const valuationsRouter = require('./sql/valuations');

router.use('/clubs', clubsRouter);
router.use('/competitions', competitionsRouter);
router.use('/players', playersRouter);
router.use('/valuations', valuationsRouter);

module.exports = router;