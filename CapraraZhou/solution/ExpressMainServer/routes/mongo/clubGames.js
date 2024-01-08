const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/club/:clubId', async (req, res) => {
    try {
        axios.get(`http://localhost:8082/club_games/club/${req.params.clubId}`)
            .then((response) =>{
                res.send(response.data);
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;