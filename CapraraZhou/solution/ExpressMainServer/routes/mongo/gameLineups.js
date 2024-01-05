const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/game/:gameId/club/:clubId', async (req, res) => {
    try {
        axios.get(`http://localhost:8082/game_lineups/game/${req.params.gameId}/club/${req.params.clubId}`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;