const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/player/:player_id', function(req, res, next) {
    try {
        axios.get(`http://localhost:8082/appearances/player/${req.params.player_id}`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/game/:game_id', async (req, res) => {
    try {
        axios.get(`http://localhost:8082/appearances/game/${req.params.game_id}`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/game/:game_id/player/:player_id', async (req, res) => {
    try {
        axios.get(`http://localhost:8082/appearances/game/${req.params.game_id}/player/${req.params.player_id}`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/club/:club_id', async (req, res) => {
    try {
        axios.get(`http://localhost:8082/appearances/club/${req.params.club_id}`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;