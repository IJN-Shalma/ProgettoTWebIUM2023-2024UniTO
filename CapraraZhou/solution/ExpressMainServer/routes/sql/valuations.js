const express = require('express');
const axios = require("axios");
const router = express.Router();

router.get('/:player_id', async (req, res) => {
    axios.get(`http://localhost:8081/valuations/${req.params.player_id}`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status).json({message: error.message})
    });
});

router.get('/', async (req, res) => {
    axios.get(`http://localhost:8081/valuations`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status).json({message: error.message})
    });
});

module.exports = router;