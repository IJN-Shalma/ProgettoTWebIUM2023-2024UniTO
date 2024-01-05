import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Loading from "./Loading";

function parseDate(date) {
    return date.getUTCDay() + "/" + (date.getUTCMonth() + 1) + "/" + date.getUTCFullYear();
}

function GameCard({game, type}) {
    return (
        <Link to={"/leagues/league/" + game.competition_id + "/game/" + game.game_id} state={{game: game}} className="button-link link-list-item">
            <div className="game-card  rounded-1 my-3 p-2 clickable">
                {(type === "index" || type === "club" || type === "player") && (<p>{game.competition_id}</p>)}
                <div className="d-flex justify-content-around align-items-top">
                    <div className="d-flex flex-column w-25 align-items-center">
                        <img alt="home-team logo" src={"https://tmssl.akamaized.net/images/wappen/normquad/" + game.home_club_id + ".png" || "/images/default.png"} className="club-logo"/>
                        {(type === "league" || type === "club" || type === "player") && (<p>{game.home_club_name || "Unavailable"}</p>)}
                    </div>
                    <div className="game-card-score d-flex align-items-center">
                        <span>{game.aggregate}</span>
                    </div>
                    <div className="d-flex flex-column w-25 align-items-center">
                        <img alt="away-team logo" src={"https://tmssl.akamaized.net/images/wappen/normquad/" + game.away_club_id + ".png"} className="club-logo"/>
                        {(type === "league" || type === "club" || type === "player") && (
                            <p>{game.away_club_name || "Unavailable"}</p>)}
                    </div>
                </div>
                <p>{parseDate(new Date(game.date))}</p>
            </div>
        </Link>
    );
}

export default GameCard;