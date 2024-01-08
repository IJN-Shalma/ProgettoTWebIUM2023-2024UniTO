const mongoose = require('mongoose');

const Appearance = new mongoose.Schema(
    {
        appearance_id: {
            type: String,
            required: true,
            unique: true
        },
        game_id: {
            type: Number,
            required: true
        },
        player_id: {
            type: Number,
            required: true
        },
        player_club_id: {
            type: Number,
            required: true
        },
        player_current_club_id: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        player_name: {
            type: String,
            required: true
        },
        competition_id: {
            type: String,
            required: true
        },
        yellow_cards: {
            type: Number,
            default: 0
        },
        red_cards: {
            type: Number,
            default: 0
        },
        goals: {
            type: Number,
            default: 0
        },
        assists: {
            type: Number,
            default: 0
        },
        minutes_played: {
            type: Number,
            required: true
        }
    }
);

/**
 * @swagger
 * components:
 *   schemas:
 *     Appearance:
 *       type: object
 *       properties:
 *         appearance_id:
 *           type: string
 *           description: The unique identifier for the appearance.
 *         game_id:
 *           type: number
 *           description: The identifier for the game to which the appearance belongs.
 *         player_id:
 *           type: number
 *           description: The identifier for the player making the appearance.
 *         player_club_id:
 *           type: number
 *           description: The identifier for the player's club at the time of the appearance.
 *         player_current_club_id:
 *           type: number
 *           description: The identifier for the player's current club.
 *         date:
 *           type: date
 *           description: The date of the appearance.
 *         player_name:
 *           type: string
 *           description: The name of the player making the appearance.
 *         competition_id:
 *           type: string
 *           description: The identifier for the competition to which the appearance belongs.
 *         yellow_cards:
 *           type: number
 *           description: The number of yellow cards received during the appearance.
 *         red_cards:
 *           type: number
 *           description: The number of red cards received during the appearance.
 *         goals:
 *           type: number
 *           description: The number of goals scored during the appearance.
 *         assists:
 *           type: number
 *           description: The number of assists made during the appearance.
 *         minutes_played:
 *           type: number
 *           description: The duration of the appearance in minutes.
 *
 *   examples:
 *     AppearanceExample:
 *       value:
 *         appearance_id: "2231978_38004"
 *         game_id: 2231978
 *         player_id: 38004
 *         player_club_id: 853
 *         player_current_club_id: 235
 *         date: "2012-07-03T00:00:00.000Z"
 *         player_name: "Aurélien Joachim"
 *         competition_id: "CLQ"
 *         yellow_cards: 0
 *         red_cards: 0
 *         goals: 2
 *         assists: 0
 *         minutes_played: 90
 */

module.exports = mongoose.model('Appearance',Appearance);