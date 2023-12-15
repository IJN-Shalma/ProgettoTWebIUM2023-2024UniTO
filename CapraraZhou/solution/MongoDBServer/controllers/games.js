const Game = require('../models/games');

function findByGameId(gameId){
    return new Promise((resolve, reject) =>{
        Game.find({game_id : gameId})
            .then((result) => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.findByGameId = findByGameId;

function findByCompetitionId(competitionId){
    return new Promise((resolve, reject) =>{
        Game.find({competition_id : competitionId})
            .then((result) => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.findByCompetitionId = findByCompetitionId;
function getClubsByCompetitionId(competitionId){
    return new Promise((resolve, reject) =>{
        Game.find({competition_id : competitionId},{home_club_id: 1, away_club_id: 1})
            .then((result) => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.getClubsByCompetitionId = getClubsByCompetitionId;