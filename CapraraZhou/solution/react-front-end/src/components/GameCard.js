import {Link} from "react-router-dom";

function GameCard({game}){
    return (
        <Link to={"/game/" + game.id} className="button-link">
            <div className="game-card  rounded-1 mt-3 p-1 clickable">
                <p>{game.leagueCode}</p>
                <div className="d-flex justify-content-around">
                    <div className="d-flex flex-column w-25 align-items-center">
                        {game.homeTeam}
                    </div>
                    <div className="game-card-score d-flex align-items-center">
                        <span aria-label="Match score">{game.score}</span>
                    </div>
                    <div className="d-flex flex-column w-25 align-items-center">
                        {game.awayTeam}
                    </div>
                </div>
                <p>{game.date}</p>
            </div>
        </Link>
    );
}

export default GameCard;