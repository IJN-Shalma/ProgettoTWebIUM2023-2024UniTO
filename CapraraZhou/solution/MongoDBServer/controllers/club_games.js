const ClubGame = require('../models/club_games');

function findByClubId(clubId){
    return new Promise((resolve, reject) =>{
        ClubGame.find({club_id : clubId})
            .then((result) => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.findByClubId = findByClubId;