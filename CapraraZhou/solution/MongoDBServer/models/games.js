const mongoose = require('mongoose');

const Game = new mongoose.Schema({
    game_id: {
        type: Number,
        unique: true,
        required: true
    },
    competition_id: {
        type: String,
        required: true
    },
    season: {
        type: Number,
        required: true
    },
    round: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    home_club_id: {
        type: Number,
        required: true
    },
    away_club_id: {
        type: Number,
        required: true
    },
    home_club_goals: {
        type: Number,
        required: true
    },
    away_club_goals: {
        type: Number,
        required: true
    },
    home_club_position: {
        type: Number,
        required: true
    },
    away_club_position: {
        type: Number,
        required: true
    },
    home_club_manager_name: {
        type: String,
        required: true
    },
    away_club_manager_name: {
        type: String,
        required: true
    },
    stadium: {
        type: String,
        required: true
    },
    attendance: {
        type: Number,
        required: true
    },
    referee: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    home_club_formation: {
        type: String,
        default: ""
    },
    away_club_formation: {
        type: String,
        default: ""
    },
    home_club_name: {
        type: String,
        required: true
    },
    away_club_name: {
        type: String,
        required: true
    },
    aggregate: {
        type: String,
        required: true
    },
    competition_type: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Game', Game);

