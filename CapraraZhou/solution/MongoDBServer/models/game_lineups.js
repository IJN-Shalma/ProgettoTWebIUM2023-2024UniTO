const mongoose = require('mongoose');

const GameLineup = new mongoose.Schema({
    game_lineups_id: {
        type: String,
        required: true,
        unique: true
    },
    game_id: {
        type: Number,
        required: true
    },
    club_id: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    player_id: {
        type: Number,
        required: true
    },
    player_name: {
        type: String,
        required: true
    },
    team_captain: {
        type: Boolean,
        default: false
    },
    position: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('game_lineup', GameLineup);