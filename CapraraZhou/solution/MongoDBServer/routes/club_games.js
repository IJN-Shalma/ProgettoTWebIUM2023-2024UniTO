const express = require('express');
const router = express.Router();
const clubGamesController = require('../controllers/club_games');

/**
 * @swagger
 * tags:
 *   - name: Club Games
 *     description: Operations related to club games
 */

/**
 * @swagger
 * /club_games/club/{club_id}:
 *   get:
 *     tags:
 *       - Club Games
 *     summary: Get club  games
 *     parameters:
 *       - in: path
 *         name: game_id
 *         required: true
 *         type: number
 *         description: The Id of club
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ClubGame'
 *             examples:
 *               AppearanceExample:
 *                 $ref: '#/components/examples/ClubGameExample'
 */
router.get('/club/:club_id', async (req, res) => {
    try {
        const games = await clubGamesController.findByClubId(req.params.club_id);
        res.json(games);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;