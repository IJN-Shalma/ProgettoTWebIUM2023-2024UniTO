const GameLineup = require('../models/game_lineups');

function findByGame(gameId){
    return new Promise((resolve, reject) =>{
        GameLineup.find({game_id : gameId})
            .then((result) => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.findByGame = findByGame;