const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/games');

router.get('/game/:game_id', async (req, res) => {
    try {
        const game = await gamesController.findByGameId(req.params.game_id);
        res.json(game);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/competition/:competition_id', async (req, res) => {
    try {
        const games = await gamesController.findByCompetitionId(req.params.competition_id);
        res.json(games);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/competition/:competition_id/clubs', async (req, res) => {
    try {
        const clubs = await gamesController.getClubsByCompetitionId(req.params.competition_id);
        res.json(clubs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;