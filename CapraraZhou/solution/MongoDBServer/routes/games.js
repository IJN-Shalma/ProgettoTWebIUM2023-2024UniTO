const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/games');


/**
 * @swagger
 * tags:
 *   - name: Games
 *     description: Operations related to game
 */

/**
 * @swagger
 * /games/game/{game_id}:
 *   get:
 *     tags:
 *       - Games
 *     summary: Get game by game Id
 *     parameters:
 *       - in: path
 *         name: game_id
 *         required: true
 *         type: number
 *         description: The Id of the game
 *     responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Game'
 *            examples:
 *              AppearanceExample:
 *                $ref: '#/components/examples/GameExample'
 */
router.get('/game/:game_id', async (req, res) => {
    try {
        const games = await gamesController.findByGameId(req.params.game_id);
        res.json(games);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/**
 * @swagger
 * /games/club/{club_id}:
 *   get:
 *     tags:
 *       - Games
 *     summary: Get last 10 games played by the club
 *     parameters:
 *       - in: path
 *         name: club_id
 *         required: true
 *         type: number
 *         description: The Id of the club
 *     responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Game'
 *            examples:
 *              AppearanceExample:
 *                $ref: '#/components/examples/GameExample'
 */
router.get('/club/:club_id', async (req, res) => {
    try {
        const games = await gamesController.findGamesByClubId(req.params.club_id);
        res.json(games);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


/**
 * @swagger
 * /games/competition/{competition_id}:
 *   get:
 *     tags:
 *       - Games
 *     summary: Get games played in a competition
 *     parameters:
 *       - in: path
 *         name: competition_id
 *         required: true
 *         type: string
 *         description: The Id of the competition
 *       - in: query
 *         name: year
 *         required: false
 *         description: Year in which the games are played
 *     responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Game'
 *            examples:
 *              AppearanceExample:
 *                $ref: '#/components/examples/GameExample'
 */
router.get('/competition/:competition_id', async (req, res) => {
    try {
        const competitionId = req.params.competition_id;
        const year = req.query.year;

        const games = await gamesController.findByCompetitionId(competitionId, year);
        res.json(games);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/competition/:competition_id/clubs', async (req, res) => {
    try {
        const clubs = await gamesController.getClubsByCompetitionId(req.params.competition_id);
        res.json(clubs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/**
 * @swagger
 * /games/competition/{competition_id}/last_games:
 *   get:
 *     tags:
 *       - Games
 *     summary: Get latest games played in a certain competition
 *     parameters:
 *       - in: path
 *         name: competition_id
 *         required: true
 *         type: string
 *         description: The Id of the competition
 *       - in: query
 *         name: n
 *         required: false
 *         description: Amount of games to fetch
 *     responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Game'
 *            examples:
 *              AppearanceExample:
 *                $ref: '#/components/examples/GameExample'
 */
router.get('/competition/:competition_id/last_games', async (req, res) =>{
   try {
       const game = await gamesController.getLastGamesForCompetition(req.params.competition_id, req.query.n);
       res.json(game);
   } catch (err){
       res.status(500).json({message: err.message});
   }
});

/**
 * @swagger
 * /games/last_games:
 *   get:
 *     tags:
 *       - Games
 *     summary: Fetch latest games in dataset
 *     parameters:
 *       - in: query
 *         name: n
 *         required: false
 *         description: Amount of games to fetch
 *     responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Game'
 *            examples:
 *              AppearanceExample:
 *                $ref: '#/components/examples/GameExample'
 */
router.get('/last_games', async (req, res) =>{
    try {
        const game = await gamesController.getLastGames(req.query.n);
        res.json(game);
    } catch (err){
        res.status(500).json({message: err.message});
    }
});

/**
 * @swagger
 * /games/competition/{competitionId}/seasons:
 *   get:
 *     tags:
 *       - Games
 *     summary: Fetch all seasons a competition took place in
 *     parameters:
 *       - in: path
 *         name: competitionId
 *         required: true
 *         description: The Id of the competition
 *     responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CompetitionSeasons'
 *            examples:
 *              AppearanceExample:
 *                $ref: '#/components/examples/CompetitionSeasonsExample'
 */
router.get('/competition/:competitionId/seasons', async (req, res) =>{
    try {
        const years = await gamesController.getSeasonsByCompetition(req.params.competitionId);
        res.json(years);
    } catch (err){
        res.status(500).json({message: err.message});
    }
});

module.exports = router;