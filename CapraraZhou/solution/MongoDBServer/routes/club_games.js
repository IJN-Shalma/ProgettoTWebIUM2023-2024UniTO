const express = require('express');
const router = express.Router();
const clubGamesController = require('../controllers/club_games');

router.get('/club/:club_id', async (req, res) => {
    try {
        const games = await clubGamesController.findByClubId(req.params.club_id);
        res.json(games);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;