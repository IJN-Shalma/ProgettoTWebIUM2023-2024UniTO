const Appearance = require('../models/appearances');

function findByGameIdAndPlayerId(game_id, player_id){
    return new Promise((resolve, reject) =>{
        Appearance.find({game_id : game_id, player_id: player_id})
            .then((result) => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}
module.exports.findByGameIdAndPlayerId = findByGameIdAndPlayerId;


function findByGameId(game_id){
    return new Promise((resolve, reject) =>{
        Appearance.find({game_id : game_id})
            .then((result) => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}
module.exports.findByGameId = findByGameId;

function findByPlayerId(player_id){
    return new Promise((resolve, reject) =>{
        Appearance.find({player_id : player_id}).sort({date:-1}).limit(10)
            .then((result) => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}
module.exports.findByPlayerId = findByPlayerId;

function findByClubId(club_id){
    return new Promise((resolve, reject) =>{
        Appearance.find({player_current_club_id : club_id}).sort({date:-1})
            .then((result) => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}
module.exports.findByClubId = findByClubId;