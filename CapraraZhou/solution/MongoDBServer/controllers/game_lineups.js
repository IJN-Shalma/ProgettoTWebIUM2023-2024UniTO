const GameLineup = require('../models/game_lineups');

function findByGameAndClub(gameId, clubId){
    return new Promise((resolve, reject) =>{
        GameLineup.find({game_id : gameId, club_id: clubId})
            .then((result) => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.findByGameAndClub = findByGameAndClub;