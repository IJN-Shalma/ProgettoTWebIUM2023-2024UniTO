const express = require('express');
const router = express.Router();
const gameEventsController = require('../controllers/game_events');

router.get('/player/:player_id', async (req, res) => {
    try {
        const gameEvents = await gameEventsController.findByPlayerId(req.params.player_id);
        res.json(gameEvents);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/game/:game_id', async (req, res) => {
    try {
        const gameEvents = await gameEventsController.findByGameId(req.params.game_id);
        res.json(gameEvents);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/game/:game_id/player/:player_id', async (req, res) => {
    try {
        const gameEvents = await gameEventsController.findByGameIdAndPlayerId(req.params.game_id, req.params.player_id);
        res.json(gameEvents);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//type e' case-sensitive
router.get('/player/:player_id/type/:type', async (req, res) => {
    try {
        const gameEvents = await gameEventsController.findByPlayerIdAndType(req.params.player_id, req.params.type);
        res.json(gameEvents);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;