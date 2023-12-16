const express = require('express');
const router = express.Router();
const gameLineupsController = require('../controllers/game_lineups');

router.get('/game/:game_id/club/:club_id', async (req, res) => {
    try {
        const gameLineups = await gameLineupsController.findByGameAndClub(req.params.game_id, req.params.club_id);
        res.json(gameLineups);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;