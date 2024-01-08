const express = require('express');
const axios = require("axios");
const router = express.Router();

router.get('/', async (req, res) =>{
    try {
        axios.get(`http://localhost:8081/competitions/`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:competitionId', async (req, res) =>{
    try {
        axios.get(`http://localhost:8081/competitions/${req.params.competitionId}`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/domestic', async (req, res) =>{
    try {
        axios.get(`http://localhost:8081/competitions/domestic`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/international', async (req, res) =>{
    try {
        axios.get(`http://localhost:8081/competitions/international`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/countries', async (req, res) =>{
    try {
        axios.get(`http://localhost:8081/competitions/countries`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/suggestions/:term', async (req, res) =>{
    try {
        axios.get(`http://localhost:8081/competitions/suggestions/${req.params.term}`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;