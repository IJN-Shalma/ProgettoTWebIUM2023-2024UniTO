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

/**
 * @swagger
 * components:
 *   schemas:
 *     Game:
 *       type: object
 *       properties:
 *         game_id:
 *           type: number
 *           unique: true
 *           description: The unique identifier for the game.
 *         competition_id:
 *           type: string
 *           description: The identifier for the competition to which the game belongs.
 *         season:
 *           type: number
 *           description: The season of the game.
 *         round:
 *           type: string
 *           description: The round or matchday of the game.
 *         date:
 *           type: date
 *           description: The date of the game.
 *         home_club_id:
 *           type: number
 *           description: The identifier for the home club.
 *         away_club_id:
 *           type: number
 *           description: The identifier for the away club.
 *         home_club_goals:
 *           type: number
 *           description: The number of goals scored by the home club.
 *         away_club_goals:
 *           type: number
 *           description: The number of goals scored by the away club.
 *         home_club_position:
 *           type: number
 *           description: The position of the home club.
 *         away_club_position:
 *           type: number
 *           description: The position of the away club.
 *         home_club_manager_name:
 *           type: string
 *           description: The name of the manager of the home club.
 *         away_club_manager_name:
 *           type: string
 *           description: The name of the manager of the away club.
 *         stadium:
 *           type: string
 *           description: The stadium where the game is played.
 *         attendance:
 *           type: number
 *           description: The attendance of the game.
 *         referee:
 *           type: string
 *           description: The name of the referee for the game.
 *         url:
 *           type: string
 *           description: The URL link to additional information about the game.
 *         home_club_formation:
 *           type: string
 *           default: ""
 *           description: The formation of the home club.
 *         away_club_formation:
 *           type: string
 *           default: ""
 *           description: The formation of the away club.
 *         home_club_name:
 *           type: string
 *           description: The name of the home club.
 *         away_club_name:
 *           type: string
 *           description: The name of the away club.
 *         aggregate:
 *           type: string
 *           description: The aggregate score of the game.
 *         competition_type:
 *           type: string
 *           description: The type of competition (e.g., domestic_league).
 *
 *   examples:
 *     GameExample:
 *       value:
 *         game_id: 2222597
 *         competition_id: "RU1"
 *         season: 2012
 *         round: "6. Matchday"
 *         date: "2012-08-25T00:00:00.000Z"
 *         home_club_id: 3725
 *         away_club_id: 232
 *         home_club_goals: 2
 *         away_club_goals: 1
 *         home_club_position: 2
 *         away_club_position: 5
 *         home_club_manager_name: "Stanislav Cherchesov"
 *         away_club_manager_name: "Unai Emery"
 *         stadium: "Akhmat-Arena"
 *         attendance: 21700
 *         referee: "Vladislav Bezborodov"
 *         url: "https://www.transfermarkt.co.uk/terek-grozny_spartak-moscow/index/spielbericht/2222597"
 *         home_club_formation: ""
 *         away_club_formation: ""
 *         home_club_name: "RFK Akhmat Grozny"
 *         away_club_name: "FK Spartak Moskva"
 *         aggregate: "2:1"
 *         competition_type: "domestic_league"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CompetitionSeasons:
 *       type: object
 *       properties:
 *         :
 *           type: array
 *           items:
 *              type: integer
 *           description: seasons the competition took place in.
 *           example: [
 *              2012,
 *              2013
 *           ]
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CompetitionClubs:
 *       type: object
 *       properties:
 *         :
 *           type: array
 *           items:
 *              type: integer
 *           description: clubs playing in competition.
 *           example: [
 *              1245,
 *              4323
 *           ]
 */

module.exports = mongoose.model('Game', Game);

