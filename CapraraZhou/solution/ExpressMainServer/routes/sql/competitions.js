const express = require('express');
const axios = require("axios");
const router = express.Router();

router.get('/', async (req, res) => {
    axios.get(`http://localhost:8081/competitions/`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status).json({message: error.message})
    });
});

router.get('/:competition_id', async (req, res) => {
    axios.get(`http://localhost:8081/competitions/${req.params.competition_id}`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status).json({message: error.message})
    });
});

router.get('/domestic', async (req, res) => {
    axios.get(`http://localhost:8081/competitions/domestic`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status).json({message: error.message})
    });
});

router.get('/international', async (req, res) => {
    axios.get(`http://localhost:8081/competitions/international`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status).json({message: error.message})
    });
});

router.get('/countries', async (req, res) => {
    axios.get(`http://localhost:8081/competitions/countries`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status).json({message: error.message})
    });
});

router.get('/suggestions/:term', async (req, res) => {
    axios.get(`http://localhost:8081/competitions/suggestions/${req.params.term}`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status).json({message: error.message})
    });
});

router.get('/country/:country_name', async (req, res) => {
    axios.get(`http://localhost:8081/competitions/country/${req.params.country_name}`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status).json({message: error.message})
    });
});

router.get('/ids', async (req, res) => {
    axios.get(`http://localhost:8081/competitions/ids`)
        .then((response) => {
            res.send(response.data);
        }).catch(error => {
        res.status(error.status).json({message: error.message})
    });
});

module.exports = router;