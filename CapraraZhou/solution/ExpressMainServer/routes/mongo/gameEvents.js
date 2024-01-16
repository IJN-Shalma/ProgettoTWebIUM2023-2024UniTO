const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/player/:player_id', async (req, res) => {

    axios.get(`http://localhost:8082/game_events/player/${req.params.player_id}`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status).json({message: error.message})
    });
});

router.get('/player/:player_id/type/:type', async (req, res) => {

    axios.get(`http://localhost:8082/game_events/player/${req.params.player_id}/type/${req.params.type}`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status).json({message: error.message})
    });
});

router.get('/game/:game_id', async (req, res) => {
    axios.get(`http://localhost:8082/game_events/game/${req.params.game_id}`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(503).json({message: 'Database Offline'})
    });
});

router.get('/game/:game_id/player/:player_id', async (req, res) => {
    axios.get(`http://localhost:8082/game_events/game/${req.params.game_id}/player/${req.params.player_id}`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status).json({message: error.message})
    });
});

router.get('/club/:club_id', async (req, res) => {

    axios.get(`http://localhost:8082/game_events/club/${req.params.club_id}`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status).json({message: error.message})
    });
});

module.exports = router;