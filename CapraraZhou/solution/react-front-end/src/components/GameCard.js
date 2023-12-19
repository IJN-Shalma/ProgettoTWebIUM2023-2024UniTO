import {Link} from "react-router-dom";

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