const express = require('express');
const router = express.Router();
const appearancesController = require('../controllers/appearances');

/**
 * @swagger
 * tags:
 *   - name: Appearances
 *     description: Operations related to appearances
 */

/**
 * @swagger
 * /appearances/game/{game_id}:
 *   get:
 *     tags:
 *       - Appearances
 *     summary: Get all appearances in a game by game Id
 *     parameters:
 *       - in: path
 *         name: game_id
 *         required: true
 *         type: number
 *         description: The Id of the game.
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Appearance'
 *             examples:
 *               AppearanceExample:
 *                 $ref: '#/components/examples/AppearanceExample'
 */
router.get('/game/:game_id', async (req, res) => {
    try {
        const appearances = await appearancesController.findByGameId(req.params.game_id);
        res.json(appearances);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/**
 * @swagger
 * /appearances/game/{game_id}/player/{player_id}:
 *   get:
 *     tags:
 *       - Appearances
 *     summary: Get single player appearance by game Id and player Id
 *     parameters:
 *       - in: path
 *         name: game_id
 *         required: true
 *         type: number
 *         description: The Id of the game.
 *       - in: path
 *         name: player_id
 *         required: true
 *         type: number
 *         description: The Id of the player
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Appearance'
 *             examples:
 *               AppearanceExample:
 *                 $ref: '#/components/examples/AppearanceExample'
 */
router.get('/game/:game_id/player/:player_id', async (req, res) => {
    try {
        const appearances = await appearancesController.findByGameIdAndPlayerId(req.params.game_id, req.params.player_id);
        res.json(appearances);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/**
 * @swagger
 * /appearances/player/{player_id}:
 *   get:
 *     tags:
 *       - Appearances
 *     summary: Get last 10 player appearances
 *     parameters:
 *       - in: path
 *         name: player_id
 *         required: true
 *         type: number
 *         description: The Id of the player
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Appearance'
 *             examples:
 *               AppearanceExample:
 *                 $ref: '#/components/examples/AppearanceExample'
 */
router.get('/player/:player_id', async (req, res) => {
    try {
        const appearances = await appearancesController.findByPlayerId(req.params.player_id);
        res.json(appearances);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/**
 * @swagger
 * /appearances/club/{club_id}:
 *   get:
 *     tags:
 *       - Appearances
 *     summary: Get all player appearances of a club's members
 *     parameters:
 *       - in: path
 *         name: club_id
 *         required: true
 *         type: number
 *         description: The Id of the club
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Appearance'
 *             examples:
 *               AppearanceExample:
 *                 $ref: '#/components/examples/AppearanceExample'
 */
router.get('/club/:club_id', async (req, res) => {
    try {
        const appearances = await appearancesController.findByClubId(req.params.club_id);
        res.json(appearances);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/**
 * @swagger
 * /appearances/club/{club_id}:
 *   get:
 *     tags:
 *       - Appearances
 *     summary: Get all appearances in a specified year
 *     parameters:
 *       - in: path
 *         name: year
 *         required: true
 *         type: number
 *         description: Year of the appearances
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Appearance'
 *             examples:
 *               AppearanceExample:
 *                 $ref: '#/components/examples/AppearanceExample'
 */
router.get('/:year', async (req, res) => {
    try {
        const appearances = await appearancesController.findByYear(req.params.year);
        res.json(appearances);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;