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

/**
 * @swagger
 * components:
 *   schemas:
 *     ClubGame:
 *       type: object
 *       properties:
 *         game_id:
 *           type: number
 *           description: The identifier for the game.
 *         club_id:
 *           type: number
 *           description: The identifier for the club.
 *         own_goals:
 *           type: number
 *           description: The number of own goals scored by the club.
 *         own_position:
 *           type: number
 *           description: The position of the club.
 *         own_manager_name:
 *           type: string
 *           description: The name of the club's manager.
 *         opponent_id:
 *           type: number
 *           description: The identifier for the opponent club.
 *         opponent_goals:
 *           type: number
 *           description: The number of goals scored by the opponent club.
 *         opponent_position:
 *           type: number
 *           description: The position of the opponent club.
 *         opponent_manager_name:
 *           type: string
 *           description: The name of the opponent club's manager.
 *         hosting:
 *           type: string
 *           description: Indicates whether the club is hosting the game.
 *         is_win:
 *           type: number
 *           description: Indicates whether the club won the game.
 *
 *   examples:
 *     ClubGameExample:
 *       value:
 *         game_id: 2231978
 *         club_id: 431
 *         own_goals: 1
 *         own_position: 0
 *         own_manager_name: "Lutz Göttling"
 *         opponent_id: 60
 *         opponent_goals: 2
 *         opponent_position: 0
 *         opponent_manager_name: "Christian Streich"
 *         hosting: "Home"
 *         is_win: 0
 */

module.exports = mongoose.model('club_game', ClubGame);