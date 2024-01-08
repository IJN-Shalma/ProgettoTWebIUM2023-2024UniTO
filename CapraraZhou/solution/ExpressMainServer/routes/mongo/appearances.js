const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/player/:playerId', function(req, res, next) {
    try {
        axios.get(`http://localhost:8082/appearances/player/${req.params.playerId}`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/game/:gameId', async (req, res) => {
    try {
        axios.get(`http://localhost:8082/appearances/game/${req.params.gameId}`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/game/:gameId/player/:playerId', async (req, res) => {
    try {
        axios.get(`http://localhost:8082/appearances/game/${req.params.gameId}/player/${req.params.playerId}`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;