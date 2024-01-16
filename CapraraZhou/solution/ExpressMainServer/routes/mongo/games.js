const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/game/:game_id', async (req, res) => {
    axios.get(`http://localhost:8082/games/game/${req.params.game_id}`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status).json({message: error.message})
    });
});

router.get('/club/:club_id', async (req, res) => {
    axios.get(`http://localhost:8082/games/club/${req.params.club_id}`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status).json({message: error.message})
    });
});

router.get('/competition/:competition_id', async (req, res) => {
    axios.get(`http://localhost:8082/games/competition/${req.params.competition_id}` + (req.query.year ? `?year=${req.query.year}` : ''))
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status).json({message: error.message})
    });
});

router.get('/competition/:competition_id/clubs', async (req, res) => {
    axios.get(`http://localhost:8082/games/competition/${req.params.competition_id}/clubs`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status).json({message: error.message})
    });
});

router.get('/competition/:competition_id/last_games', async (req, res) => {
    axios.get(`http://localhost:8082/games/competition/${req.params.competition_id}/last_games` + (req.query.n ? `?n=${req.query.n}` : ''))
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status).json({message: error.message})
    });
});

router.get('/last_games', async (req, res) => {
    axios.get(`http://localhost:8082/games/last_games` + (req.query.n ? `?n=${req.query.n}` : ''))
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status).json({message: error.message})
    });
});

router.get('/competition/:competition_id/seasons', async (req, res) => {
    axios.get(`http://localhost:8082/games/competition/${req.params.competition_id}/seasons`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status).json({message: error.message})
    });
});

module.exports = router;