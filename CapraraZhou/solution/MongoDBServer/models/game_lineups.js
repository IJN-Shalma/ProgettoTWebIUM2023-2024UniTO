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

/**
 * @swagger
 * components:
 *   schemas:
 *     GameLineup:
 *       type: object
 *       properties:
 *         game_lineups_id:
 *           type: string
 *           description: The unique identifier for the game lineup.
 *         game_id:
 *           type: number
 *           description: The identifier for the game to which the lineup belongs.
 *         club_id:
 *           type: number
 *           description: The identifier for the club in the lineup.
 *         type:
 *           type: string
 *           description: The type of lineup (e.g., starting_lineup).
 *         number:
 *           type: string
 *           description: The number associated with the player in the lineup.
 *         player_id:
 *           type: number
 *           description: The identifier for the player in the lineup.
 *         player_name:
 *           type: string
 *           description: The name of the player in the lineup.
 *         team_captain:
 *           type: boolean
 *           description: Indicates whether the player is the team captain.
 *           default: false
 *         position:
 *           type: string
 *           description: The position of the player in the lineup.
 *
 *   examples:
 *     GameLineupExample:
 *       value:
 *         game_lineups_id: "77b0f371923e0c8bdf050a1e269faaac"
 *         game_id: 3606208
 *         club_id: 338
 *         type: "starting_lineup"
 *         number: "89"
 *         player_id: 419061
 *         player_name: "Vladyslav Supryaga"
 *         team_captain: false
 *         position: "Centre-Forward"
 */

module.exports = mongoose.model('game_lineup', GameLineup);