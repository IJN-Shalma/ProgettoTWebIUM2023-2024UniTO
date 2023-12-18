import {Link} from "react-router-dom";

/*
[
    {
        "_id": "65789683e2ebee12cbdfb066",
        "game_id": 2222597,
        "competition_id": "RU1",
        "season": 2012,
        "round": "6. Matchday",
        "date": "2012-08-25T00:00:00.000Z",
        "home_club_id": 3725,
        "away_club_id": 232,
        "home_club_goals": 2,
        "away_club_goals": 1,
        "home_club_position": 2,
        "away_club_position": 5,
        "home_club_manager_name": "Stanislav Cherchesov",
        "away_club_manager_name": "Unai Emery",
        "stadium": "Akhmat-Arena",
        "attendance": 21700,
        "referee": "Vladislav Bezborodov",
        "url": "https://www.transfermarkt.co.uk/terek-grozny_spartak-moscow/index/spielbericht/2222597",
        "home_club_formation": "",
        "away_club_formation": "",
        "home_club_name": "RFK Akhmat Grozny",
        "away_club_name": "FK Spartak Moskva",
        "aggregate": "2:1",
        "competition_type": "domestic_league"
    }
]
 */

function parseDate(date){
    return date.getUTCDay() + "/" + (date.getUTCMonth()+1) + "/" + date.getUTCFullYear();
}

function GameCard({game,type}){
    return (
        <Link to={"leagues/league/" + game.competition_id + "/game/" + game.game_id} state={{game:game}} className="button-link">
            <div className="game-card  rounded-1 mt-3 p-1 clickable">
                {(type == "index" || type =="club" || type == "player") && (<p>{game.competitionId}</p>)}
                <div className="d-flex justify-content-around align-items-top">
                    <div className="d-flex flex-column w-25 align-items-center">
                        <img alt="home-team logo" src="/images/default.png" className="club-logo"/>
                        {(type == "league" || type =="club" || type == "player") && (<p>{game.home_club_name || "Unavailable"}</p>)}
                    </div>
                    <div className="game-card-score d-flex align-items-center">
                        <span>{game.aggregate}</span>
                    </div>
                    <div className="d-flex flex-column w-25 align-items-center">
                        <img alt="away-team logo" src="/images/default.png" className="club-logo"/>
                        {(type == "league" || type =="club" || type == "player") && (<p>{game.away_club_name || "Unavailable"}</p>)}
                    </div>
                </div>
                <p>{parseDate(new Date(game.date))}</p>
            </div>
        </Link>
    );
}

export default GameCard;