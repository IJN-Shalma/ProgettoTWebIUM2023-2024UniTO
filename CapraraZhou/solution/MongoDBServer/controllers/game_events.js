const GameEvent = require('../models/game_events');

function findByGameId(gameId){
    return new Promise((resolve, reject) =>{
        GameEvent.find({game_id : gameId}).sort('minute')
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
        GameEvent.find({player_id : playerId})
            .then((result) => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.findByPlayerId = findByPlayerId;

function findByGameIdAndPlayerId(gameId, playerId){
    return new Promise((resolve, reject) =>{
        GameEvent.find({game_id : gameId, player_id : playerId})
            .then((result) => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.findByGameIdAndPlayerId = findByGameIdAndPlayerId;

function findByPlayerIdAndType(playerId, type){
    return new Promise((resolve, reject) =>{
        GameEvent.find({player_id : playerId, type : type})
            .then((result) => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.findByPlayerIdAndType = findByPlayerIdAndType;

function findByClubId(clubId){
    return new Promise((resolve, reject) =>{
        GameEvent.find({club_id : clubId})
            .then((result) => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.findByClubId = findByClubId;