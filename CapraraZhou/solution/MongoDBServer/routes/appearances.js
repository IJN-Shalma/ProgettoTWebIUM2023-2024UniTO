const express = require('express');
const router = express.Router();
const appearancesController = require('../controllers/appearances');

router.get('/game/:game_id', async (req, res) => {
    try {
        const appearances = await appearancesController.findByGameId(req.params.game_id);
        res.json(appearances);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



router.get('/game/:game_id/player/:player_id', async (req, res) => {
    try {
        const appearances = await appearancesController.findByGameIdAndPlayerId(req.params.game_id, req.params.player_id);
        res.json(appearances);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/player/:player_id', async (req, res) => {
    try {
        const appearances = await appearancesController.findByPlayerId(req.params.player_id);
        res.json(appearances);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;