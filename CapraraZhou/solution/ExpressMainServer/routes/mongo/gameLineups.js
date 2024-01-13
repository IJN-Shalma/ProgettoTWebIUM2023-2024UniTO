const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/game/:game_id/club/:club_id', async (req, res) => {
    try {
        axios.get(`http://localhost:8082/game_lineups/game/${req.params.game_id}/club/${req.params.club_id}`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;