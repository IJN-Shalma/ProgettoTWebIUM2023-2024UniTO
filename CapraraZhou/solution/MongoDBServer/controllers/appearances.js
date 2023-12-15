const Appearance = require('../models/appearances');

function findByGameIdAndPlayerId(gameId){
    return new Promise((resolve, reject) =>{
        Appearance.find({game_id : gameId})
            .then((result) => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}
module.exports.findByGameIdAndPlayerId = findByGameIdAndPlayerId;

function findByPlayerId(playerId){
    return new Promise((resolve, reject) =>{
        Appearance.find({player_id : playerId})
            .then((result) => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}
module.exports.findByPlayerId = findByPlayerId;