import GameEventList from "../components/GameEventList";
import {Link, useLocation} from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import PlayerCardList from "../components/PlayerCardList";

function Game() {
    const {state} = useLocation();
    const game = state.game;

    return (
        <>
            <Breadcrumb/>
            <div className="d-lg-flex container">
                <div className="d-lg-flex flex-grow-1 flex-column"> {/* Left Column */}
                    <div className="d-flex flex-column box-shadow rounded-1 m-3 p-2"> {/* Score events box */}
                        <h1>{game.competition_id}</h1>
                        <div className="d-flex justify-content-around align-items-top text-center"> {/* Centre Box */}
                            <div className="d-flex flex-column w-25 align-items-center">
                                <Link to={"/leagues/league/" + game.competition_id + "/club/" + game.home_club_id} state={{clubId: game.home_club_id}} className="button-link">
                                    <img alt="home-team logo"  src={"https://tmssl.akamaized.net/images/wappen/normquad/" + game.home_club_id + ".png" || "/images/default.png"} className="club-logo"/>
                                    <p>{game.home_club_name || "Unavailable"}</p>
                                </Link>
                            </div>

                            <div className="game-card-score d-flex align-items-center">
                                <span>{game.aggregate}</span>
                            </div>
                            <div className="d-flex flex-column w-25 align-items-center">
                                <Link to={"/leagues/league/" + game.competition_id + "/club/" + game.away_club_id} state={{clubId: game.away_club_id}} className="button-link">
                                    <img alt="away-team logo"  src={"https://tmssl.akamaized.net/images/wappen/normquad/" + game.away_club_id + ".png" || "/images/default.png"} className="club-logo"/>
                                    <p>{game.away_club_name || "Unavailable"}</p>
                                </Link>
                            </div>
                        </div>
                        <div className="m-auto">2023-11-28</div>
                        <div className="mt-3">
                            <h2>Event list</h2>
                            <GameEventList gameId={game.game_id}/>
                        </div>
                    </div>
                    <div className="box-shadow rounded-1 m-3 p-2"> {/* Other Info box */}
                        <h2>Match info</h2>
                        <p><b>Referee</b>: {game.referee || "Unavailable"}</p>
                        <p><b>Stadium</b>: {game.stadium || "Unavailable"}</p>
                        <p><b>Attendance</b>: {game.attendance || "Unavailable"}</p>
                        <p><b>Season</b>: {game.season || "Unavailable"}</p>
                        <p><b>Round</b>: {game.round || "Unavailable"}</p>
                    </div>
                </div>
                <div className="flex-grow-1"> {/* Right Column */}
                    <div className="d-lg-flex box-shadow rounded-1 m-3 p-2">
                        <div className="d-flex flex-column flex-grow-1 p-1"> {/* Home Team List */}
                            <h2>Home Team</h2>
                            <div className="flex-grow-1 bb-item-list">
                                <PlayerCardList gameId={game.game_id} clubId={game.home_club_id} />
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-grow-1 p-1"> {/* Away Team List */}
                            <h2>Away Team</h2>
                            <div className="flex-grow-1 bb-item-list">
                                <PlayerCardList gameId={game.game_id} clubId={game.away_club_id}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Game;