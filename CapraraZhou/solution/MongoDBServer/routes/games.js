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
        const competitionId = req.params.competition_id;
        const year = req.query.year;

        const games = await gamesController.findByCompetitionId(competitionId, year);
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

router.get('/competition/:competition_id/last_games', async (req, res) =>{
   try {
       const game = await gamesController.getLastGamesForCompetition(req.params.competition_id, req.query.n);
       res.json(game);
   } catch (err){
       res.status(500).json({message: err.message});
   }
});

router.get('/last_games', async (req, res) =>{
    try {
        const game = await gamesController.getLastGames(req.query.n);
        res.json(game);
    } catch (err){
        res.status(500).json({message: err.message});
    }
});

module.exports = router;