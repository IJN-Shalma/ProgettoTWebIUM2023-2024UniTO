const mongoose = require('mongoose');

const GameEvent = new mongoose.Schema({
    game_event_id: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        required: true
    },
    game_id: {
        type: Number,
        required: true
    },
    minute: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    club_id: {
        type: Number,
        required: true
    },
    player_id: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    player_in_id: {
        type: Number
    },
    player_assist_id: {
        type: Number
    }
});

module.exports = mongoose.model('GameEvent', GameEvent);