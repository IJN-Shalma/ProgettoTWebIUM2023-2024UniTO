const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/game/:game_id', async (req, res) => {
    try {
        axios.get(`http://localhost:8082/games/game/${req.params.game_id}`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/club/:club_id', async (req, res) => {
    try {
        axios.get(`http://localhost:8082/games/club/${req.params.club_id}`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/competition/:competition_id', async (req, res) => {
    try {
        axios.get(`http://localhost:8082/games/competition/${req.params.competition_id}` + (req.query.year ? `?year=${req.query.year}` : ''))
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/competition/:competition_id/clubs', async (req, res) => {
    try {
        axios.get(`http://localhost:8082/games/competition/${req.params.competition_id}/clubs`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/competition/:competition_id/last_games', async (req, res) =>{
    try {
        axios.get(`http://localhost:8082/games/competition/${req.params.competition_id}/last_games` + (req.query.n ? `?n=${req.query.n}` : ''))
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

router.get('/competition/:competition_id/seasons', async (req, res) =>{
    try {
        axios.get(`http://localhost:8082/games/competition/${req.params.competition_id}/seasons`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err){
        res.status(500).json({message: err.message});
    }
});

module.exports = router;