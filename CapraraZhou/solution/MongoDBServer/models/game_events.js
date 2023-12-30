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

/**
 * @swagger
 * components:
 *   schemas:
 *     GameEvent:
 *       type: object
 *       properties:
 *         game_event_id:
 *           type: string
 *           description: The unique identifier for the game event.
 *         date:
 *           type: string
 *           format: date
 *           description: The date of the game event.
 *         game_id:
 *           type: number
 *           description: The identifier for the game to which the event belongs.
 *         minute:
 *           type: number
 *           description: The minute at which the event occurred.
 *         type:
 *           type: string
 *           description: The type of the event (e.g., Goals, Cards, etc.).
 *         club_id:
 *           type: number
 *           description: The identifier for the club associated with the event.
 *         player_id:
 *           type: number
 *           description: The identifier for the player associated with the event.
 *         description:
 *           type: string
 *           description: Additional description or details about the event.
 *         player_in_id:
 *           type: number
 *           description: The identifier for the player coming into the game (if applicable).
 *         player_assist_id:
 *           type: number
 *           description: The identifier for the player providing an assist (if applicable).
 *
 *   examples:
 *     GameEventExample:
 *       value:
 *         game_event_id: "2f41da30c471492e7d4a984951671677"
 *         date: "2012-08-05"
 *         game_id: 2211607
 *         minute: 77
 *         type: "Cards"
 *         club_id: 610
 *         player_id: 4425
 *         description: "1. Yellow card, Mass confrontation"
 *         player_in_id: null
 *         player_assist_id: null
 */

module.exports = mongoose.model('game_event', GameEvent);