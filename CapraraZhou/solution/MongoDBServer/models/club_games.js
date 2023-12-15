const mongoose = require('mongoose');

const ClubGame = new mongoose.Schema({
    game_id: {
        type: Number,
        required: true
    },
    club_id: {
        type: Number,
        required: true
    },
    own_goals: {
        type: Number,
        required: true
    },
    own_position: {
        type: Number,
        required: true
    },
    own_manager_name: {
        type: String,
        required: true
    },
    opponent_id: {
        type: Number,
        required: true
    },
    opponent_goals: {
        type: Number,
        required: true
    },
    opponent_position: {
        type: Number,
        required: true
    },
    opponent_manager_name: {
        type: String,
        required: true
    },
    hosting: {
        type: String,
        required: true
    },
    is_win: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('ClubGame', ClubGame);