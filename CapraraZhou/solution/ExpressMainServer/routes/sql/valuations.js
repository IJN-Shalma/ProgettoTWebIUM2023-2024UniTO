const express = require('express');
const axios = require("axios");
const router = express.Router();

router.get('/:player_id', async (req, res) =>{
    try {
        axios.get(`http://localhost:8081/valuations/${req.params.player_id}`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/', async (req, res) =>{
    try {
        axios.get(`http://localhost:8081/valuations`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;