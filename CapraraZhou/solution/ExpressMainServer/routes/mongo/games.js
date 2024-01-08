const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/game/:gameId', async (req, res) => {
    try {
        axios.get(`http://localhost:8082/games/game/${req.params.gameId}`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/club/:clubId', async (req, res) => {
    try {
        axios.get(`http://localhost:8082/games/club/${req.params.clubId}`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/competition/:competitionId', async (req, res) => {
    try {
        axios.get(`http://localhost:8082/games/competition/${req.params.competitionId}` + (req.query.year ? `?year=${req.query.year}` : ''))
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/competition/:competitionId/clubs', async (req, res) => {
    try {
        axios.get(`http://localhost:8082/games/competition/${req.params.competitionId}/clubs`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/competition/:competitionId/last_games', async (req, res) =>{
    try {
        axios.get(`http://localhost:8082/games/competition/${req.params.competitionId}/last_games` + (req.query.n ? `?n=${req.query.n}` : ''))
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err){
        res.status(500).json({message: err.message});
    }
});

router.get('/last_games', async (req, res) =>{
    try {
        axios.get(`http://localhost:8082/games/last_games` + (req.query.n ? `?n=${req.query.n}` : ''))
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err){
        res.status(500).json({message: err.message});
    }
});

router.get('/competition/:competitionId/seasons', async (req, res) =>{
    try {
        axios.get(`http://localhost:8082/games/competition/${req.params.competitionId}/seasons`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err){
        res.status(500).json({message: err.message});
    }
});

module.exports = router;