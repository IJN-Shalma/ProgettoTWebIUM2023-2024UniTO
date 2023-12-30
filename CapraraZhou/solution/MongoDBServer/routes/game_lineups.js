const express = require('express');
const router = express.Router();
const gameLineupsController = require('../controllers/game_lineups');

/**
 * @swagger
 * tags:
 *   - name: Game lineups
 *     description: Operations related to game lineups
 */

/**
 * @swagger
 * /game_lineups/{game_id}/club/{club_id}:
 *   get:
 *     tags:
 *       - Game lineups
 *     summary: Get game lineup by game Id and club Id
 *     parameters:
 *       - in: path
 *         name: game_id
 *         required: true
 *         type: number
 *         description: The Id of the game
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
 *               $ref: '#/components/schemas/GameLineup'
 *             examples:
 *               AppearanceExample:
 *                 $ref: '#/components/examples/GameLineupExample'
 */
router.get('/game/:game_id/club/:club_id', async (req, res) => {
    try {
        const gameLineups = await gameLineupsController.findByGameAndClub(req.params.game_id, req.params.club_id);
        res.json(gameLineups);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;