const express = require('express');
const axios = require("axios");
const router = express.Router();

router.get('/competition/:competitionId', async (req, res) =>{
    try {
        axios.get(`http://localhost:8081/clubs/competition/${req.params.competitionId}`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:clubId', async (req, res) =>{
    try {
        axios.get(`http://localhost:8081/clubs/${req.params.clubId}`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/suggestions/:term', async (req, res) =>{
    try {
        axios.get(`http://localhost:8081/clubs/suggestions/${req.params.term}`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;