import GameEventList from "../components/GameEventList";
import {useLocation} from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
/*{
    "_id": "65789684e2ebee12cbdfe731",
    "game_id": 4225543,
    "competition_id": "RU1",
    "season": 2023,
    "round": "16. Matchday",
    "date": "2023-11-26T00:00:00.000Z",
    "home_club_id": 14589,
    "away_club_id": 3725,
    "home_club_goals": 1,
    "away_club_goals": 1,
    "home_club_position": 13,
    "away_club_position": 14,
    "home_club_manager_name": "David Deogracia",
    "away_club_manager_name": "Miroslav Romashchenko",
    "stadium": "Gazovik",
    "attendance": 2420,
    "referee": "Artem Lyubimov",
    "url": "https://www.transfermarkt.co.uk/fk-orenburg_akhmat-grozny/index/spielbericht/4225543",
    "home_club_formation": "4-3-3 Attacking",
    "away_club_formation": "4-2-3-1",
    "home_club_name": "FC Orenburg",
    "away_club_name": "RFK Akhmat Grozny",
    "aggregate": "1:1",
    "competition_type": "domestic_league"
}*/
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
                        <div className="d-flex flex-column w-25 align-items-center clickable">
                            <img alt="home-team logo" src="/images/default.png" className="club-logo"/>
                            <p>{game.home_club_name || "Unavailable"}</p>
                        </div>
                        <div className="game-card-score d-flex align-items-center">
                            <span>{game.aggregate}</span>
                        </div>
                        <div className="d-flex flex-column w-25 align-items-center clickable">
                            <img alt="away-team logo" src="/images/default.png" className="club-logo"/>
                            <p>{game.away_club_name || "Unavailable"}</p>
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
                            <div
                                className="game-player-box d-flex align-items-center m-3 clickable p-1"> {/* Player box*/}
                                <img
                                    src="https://img.a.transfermarkt.technology/portrait/header/349066-1680791339.jpg?lm=1"
                                    alt="player-photo" height="100em" className="rounded-1" alt="player-photo"/>
                                <div className="flex-grow-1  p-1">
                                    <p><b>Alexander Isak</b></p>
                                    <p>Centre-Forward</p>
                                    <div className="d-flex flex-wrap">
                                        <p>🟥: 0</p>
                                        <p>🟨: 0</p>
                                        <p>⚽: 1</p>
                                        <p>🤚: 0</p>
                                        <p>🕐: 90</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="game-player-box d-flex align-items-center m-3 clickable p-1"> {/* Player box*/}
                                <img src="https://img.a.transfermarkt.technology/portrait/header/349066-1680791339.jpg"
                                     alt="player-photo" height="100em" className="rounded-1"/>
                                <div className="flex-grow-1 p-1">
                                    <p><b>Someone</b></p>
                                    <p>Some Role</p>
                                    <div className="d-flex flex-wrap">
                                        <p>🟥: 0</p>
                                        <p>🟨: 0</p>
                                        <p>⚽: 0</p>
                                        <p>🤚: 0</p>
                                        <p>🕐: 90</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="game-player-box d-flex align-items-center m-3 clickable p-1"> {/* Player box*/}
                                <img src="https://img.a.transfermarkt.technology/portrait/header/349066-1680791339.jpg"
                                     alt="player-photo" height="100em" className="rounded-1"/>
                                <div className="flex-grow-1 p-1">
                                    <p><b>Someone</b></p>
                                    <p>Some Role</p>
                                    <div className="d-flex flex-wrap">
                                        <p>🟥: 0</p>
                                        <p>🟨: 0</p>
                                        <p>⚽: 0</p>
                                        <p>🤚: 0</p>
                                        <p>🕐: 90</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-grow-1 p-1"> {/* Away Team List */}
                        <h2>Away Team</h2>
                        <div className="flex-grow-1 bb-item-list">
                            <div
                                className="game-player-box d-flex align-items-center m-3 clickable p-1"> {/* Player box*/}
                                <img src="https://img.a.transfermarkt.technology/portrait/header/349066-1680791339.jpg"
                                     alt="player-photo" height="100em" className="rounded-1"/>
                                <div className="flex-grow-1 p-1">
                                    <p><b>Someone</b></p>
                                    <p>Some Role</p>
                                    <div className="d-flex flex-wrap">
                                        <p>🟥: 0</p>
                                        <p>🟨: 0</p>
                                        <p>⚽: 0</p>
                                        <p>🤚: 0</p>
                                        <p>🕐: 90</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="game-player-box d-flex align-items-center m-3 clickable p-1"> {/* Player box*/}
                                <img src="https://img.a.transfermarkt.technology/portrait/header/349066-1680791339.jpg"
                                     alt="player-photo" height="100em" className="rounded-1"/>
                                <div className="flex-grow-1 p-1">
                                    <p><b>Someone</b></p>
                                    <p>Some Role</p>
                                    <div className="d-flex flex-wrap">
                                        <p>🟥: 0</p>
                                        <p>🟨: 0</p>
                                        <p>⚽: 0</p>
                                        <p>🤚: 0</p>
                                        <p>🕐: 90</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="game-player-box d-flex align-items-center m-2 clickable p-1"> {/* Player box*/}
                                <img src="https://img.a.transfermarkt.technology/portrait/header/349066-1680791339.jpg"
                                     alt="player-photo" height="100em" className="rounded-1"/>
                                <div className="flex-grow-1 p-1">
                                    <p><b>Someone</b></p>
                                    <p>Some Role</p>
                                    <div className="d-flex flex-wrap">
                                        <p>🟥: 0</p>
                                        <p>🟨: 0</p>
                                        <p>⚽: 0</p>
                                        <p>🤚: 0</p>
                                        <p>🕐: 90</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Game;