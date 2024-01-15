const express = require('express');
const router = express.Router();
const gameEventsController = require('../controllers/game_events');


/**
 * @swagger
 * tags:
 *   - name: Game events
 *     description: Operations related to game events
 */

/**
 * @swagger
 *
 * /game_events/player/{player_id}:
 *   get:
 *     tags:
 *       - Game events
 *     summary: Get game events by player Id
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
 *               $ref: '#/components/schemas/GameEvent'
 *             examples:
 *               AppearanceExample:
 *                 $ref: '#/components/examples/GameEventExample'
 */
router.get('/player/:player_id', async (req, res) => {
    try {
        const gameEvents = await gameEventsController.findByPlayerId(req.params.player_id);
        res.json(gameEvents);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/**
 * @swagger
 * /game_events/game/{game_id}:
 *   get:
 *     tags:
 *       - Game events
 *     summary: Get game events by game Id
 *     parameters:
 *       - in: path
 *         name: game_id
 *         required: true
 *         type: number
 *         description: The Id of the game
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GameEvent'
 *             examples:
 *               AppearanceExample:
 *                 $ref: '#/components/examples/GameEventExample'
 */
router.get('/game/:game_id', async (req, res) => {
    try {
        const gameEvents = await gameEventsController.findByGameId(req.params.game_id);
        res.json(gameEvents);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/**
 * @swagger
 * /game_events/game/{game_id}/player/{player_id}:
 *   get:
 *     tags:
 *       - Game events
 *     summary: Get game events by game Id and player id
 *     parameters:
 *       - in: path
 *         name: game_id
 *         required: true
 *         type: number
 *         description: The Id of the game
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
 *               $ref: '#/components/schemas/GameEvent'
 *             examples:
 *               AppearanceExample:
 *                 $ref: '#/components/examples/GameEventExample'
 */
router.get('/game/:game_id/player/:player_id', async (req, res) => {
    try {
        const gameEvents = await gameEventsController.findByGameIdAndPlayerId(req.params.game_id, req.params.player_id);
        res.json(gameEvents);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/**
 * @swagger
 * /game_events/player/{player_id}/type/{type}:
 *   get:
 *     tags:
 *       - Game events
 *     summary: Get game events by game Id and player id
 *     parameters:
 *       - in: path
 *         name: player_id
 *         required: true
 *         type: number
 *         description: The Id of the player
 *       - in: path
 *         name: type
 *         required: true
 *         type: string
 *         description: The type ov the event, case-sensitive
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GameEvent'
 *             examples:
 *               AppearanceExample:
 *                 $ref: '#/components/examples/GameEventExample'
 */
router.get('/player/:player_id/type/:type', async (req, res) => {
    try {
        const gameEvents = await gameEventsController.findByPlayerIdAndType(req.params.player_id, req.params.type);
        res.json(gameEvents);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/**
 * @swagger
 * /game_events/club/{club_id}:
 *   get:
 *     tags:
 *       - Game events
 *     summary: Get game events by club id
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
 *               $ref: '#/components/schemas/GameEvent'
 *             examples:
 *               AppearanceExample:
 *                 $ref: '#/components/examples/GameEventExample'
 */
router.get('/club/:club_id', async (req, res) => {
    try {
        const gameEvents = await gameEventsController.findByClubId(req.params.club_id);
        res.json(gameEvents);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;