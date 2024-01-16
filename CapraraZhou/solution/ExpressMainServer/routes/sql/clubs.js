const express = require('express');
const axios = require("axios");
const router = express.Router();

router.get('/competition/:competition_id', async (req, res) => {
    axios.get(`http://localhost:8081/clubs/competition/${req.params.competition_id}`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(500).json({message: error.message})
    });
});

router.get('/:club_id', async (req, res) => {
    axios.get(`http://localhost:8081/clubs/${req.params.club_id}`)
        .then((response) => {
            console.log("DIOMADONNA");
            res.send(response.data);
        }).catch(error => {
        res.status(500).json({'error': error.message});
    });
});

router.get('/suggestions/:term', async (req, res) => {
    axios.get(`http://localhost:8081/clubs/suggestions/${req.params.term}`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(500).json({message: error.message})
    });
});

module.exports = router;