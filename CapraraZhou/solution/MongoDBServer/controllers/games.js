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

function findGamesByClubId(club_id) {
    return new Promise((resolve, reject) => {
        Game.find({$or : [{home_club_id: club_id},{away_club_id: club_id}]}).sort({date: -1}).limit(10)
            .then((result) => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    })
}

module.exports.findGamesByClubId = findGamesByClubId;

function findByCompetitionId(competitionId, year){
    return new Promise((resolve, reject) => {
        let query = { competition_id: competitionId };

        if (year) {query.date = { $gte: new Date(`${year}-01-01`), $lt: new Date(`${parseInt(year) + 1}-01-01`) };}

        Game.find(query).sort({date: -1})
            .then((result) => {
                resolve(result);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

module.exports.findByCompetitionId = findByCompetitionId;

function getClubsByCompetitionId(competitionId){
    return new Promise((resolve, reject) =>{
        Game.distinct('home_club_id', {competition_id : competitionId})
            .then((homeResult) => {
                Game.distinct('away_club_id', {competition_id : competitionId})
                    .then(awayResult => {
                        resolve([...new Set([...homeResult, ...awayResult])]);
                    })
                    .catch(error => {
                        reject(error);
                    })
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.getClubsByCompetitionId = getClubsByCompetitionId;

function getLastGamesForCompetition(competitionId, n){
    return new Promise((resolve, reject) =>{
        Game
            .find({competition_id : competitionId})
            .sort({date:-1})
            .limit(n ? n : 10)
            .then((result) => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.getLastGamesForCompetition = getLastGamesForCompetition;

function getLastGames(n){
    return new Promise((resolve, reject) => {
        Game
            .find()
            .sort({date:-1})
            .limit(n ? n : 10)
            .then((result) => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.getLastGames = getLastGames;