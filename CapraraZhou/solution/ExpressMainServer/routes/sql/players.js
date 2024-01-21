const express = require('express');
const axios = require("axios");
const router = express.Router();

router.get('/topPlayers', async (req, res) => {
    axios.get(`http://localhost:8081/players/topPlayers`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status || 500).json({message: error.message})
    });
});

router.get('/:players_ids', async (req, res) => {
    axios.get(`http://localhost:8081/players/${req.params.players_ids}`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status || 500).json({message: error.message})
    });
});

router.get('/club/:club_id', async (req, res) => {
    axios.get(`http://localhost:8081/players/club/${req.params.club_id}`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status || 500).json({message: error.message})
    });
});

router.get('/name/:id', async (req, res) => {
    axios.get(`http://localhost:8081/players/name/${req.params.id}`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status || 500).json({message: error.message})
    });
});

router.get('/suggestions/:term', async (req, res) => {
    axios.get(`http://localhost:8081/players/suggestions/${req.params.term}`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status || 500).json({message: error.message})
    });
});

router.get('/', async (req, res) => {
    axios.get(`http://localhost:8081/players`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status || 500).json({message: error.message})
    });
});

module.exports = router;