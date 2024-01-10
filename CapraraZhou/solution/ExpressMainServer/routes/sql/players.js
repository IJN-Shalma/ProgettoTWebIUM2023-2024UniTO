const express = require('express');
const axios = require("axios");
const router = express.Router();

router.get('/topPlayers', async (req, res) =>{
    try {
        axios.get(`http://localhost:8081/players/topPlayers`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:playersIds', async (req, res) =>{
    try {
        axios.get(`http://localhost:8081/players/${req.params.playersIds}`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/club/:clubId', async (req, res) =>{
    try {
        axios.get(`http://localhost:8081/players/club/${req.params.clubId}`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/name/:id', async (req, res) =>{
    try {
        axios.get(`http://localhost:8081/players/name/${req.params.id}`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/suggestions/:term', async (req, res) =>{
    try {
        axios.get(`http://localhost:8081/players/suggestions/${req.params.term}`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/', async (req, res) =>{
    try {
        axios.get(`http://localhost:8081/players`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;