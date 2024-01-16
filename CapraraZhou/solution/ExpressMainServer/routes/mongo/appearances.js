const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/player/:player_id', function (req, res, next) {
    axios.get(`http://localhost:8082/appearances/player/${req.params.player_id}`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status).json({message: error.message})
    });
});

router.get('/game/:game_id', async (req, res) => {
    axios.get(`http://localhost:8082/appearances/game/${req.params.game_id}`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
            res.status(error.status).json({message: error.message})
    });
});

router.get('/game/:game_id/player/:player_id', async (req, res) => {
    axios.get(`http://localhost:8082/appearances/game/${req.params.game_id}/player/${req.params.player_id}`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status).json({message: error.message})
    });
});

router.get('/club/:club_id', async (req, res) => {
    axios.get(`http://localhost:8082/appearances/club/${req.params.club_id}`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status).json({message: error.message})
    });
});

router.get('/:year', async (req, res) => {
    axios.get(`http://localhost:8082/appearances/${req.params.year}`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status).json({message: error.message})
    });
});

module.exports = router;