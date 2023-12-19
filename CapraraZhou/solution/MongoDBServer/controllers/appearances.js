const Appearance = require('../models/appearances');

function findByGameIdAndPlayerId(gameId, playerId){
    return new Promise((resolve, reject) =>{
        Appearance.find({game_id : gameId, player_id: playerId})
            .then((result) => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}
module.exports.findByGameIdAndPlayerId = findByGameIdAndPlayerId;


function findByGameId(gameId){
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
module.exports.findByGameId = findByGameId;

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