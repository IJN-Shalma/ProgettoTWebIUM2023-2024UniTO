import {Link} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import Loading from "./Loading";

/**
 * LeagueCard component
 * Rendered by LeagueCardList component, displays a clickable box league with a preview of the latest match
 * @param league - League object, received from upper components
 */
function LeagueCard({league}){
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);

    const translationDictionary = {
        'europa-league': 'Europa League',
        'uefa-champions-league' : 'Champions League',
        'fifa-klub-wm' : ' World Cup',
        'uefa-super-cup' : 'Super Cup'
    };

    useEffect(()=>{
        axios.get('/mongo/games/competition/' + league.competitionId + '/last_games?n=1')
            .then(result => {
                setGame(result.data[0]);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    },[league])

    return (
        loading
            ? (<Loading/>)
            : (
                <Link to={"/leagues/league/" + league.competitionId}  state={{league:league}} className="button-link">
                    <div className="d-flex flex-column m-3 index-league-box p-2 clickable">
                        <div className="d-flex align-items-center justify-content-between">
                            <img alt="League Logo" src={"https://tmssl.akamaized.net/images/logo/header/" + league.competitionId.toLowerCase() + ".png" || "/images/default.png"} className="index-league-logo"/>
                            <h2 className="m-2 accent text-end">{translationDictionary[league.name] || league.name.replaceAll("-", " ")}</h2>
                        </div>

                        <div className="d-flex flex-column mt-2"> {/* last game */}
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <img alt="away-team logo" src={"https://tmssl.akamaized.net/images/wappen/normquad/" + game.home_club_id + ".png" || "/images/default.png"} className="index-club-logo mx-1" />
                                    <p>{game.home_club_name || "Unavailable"}</p>
                                </div>
                                <p>{game.home_club_goals || "?"}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <img alt="away-team logo" src={"https://tmssl.akamaized.net/images/wappen/normquad/" + game.away_club_id + ".png" || "/images/default.png"} className="index-club-logo mx-1" />
                                    <p>{game.away_club_name || "Unavailable"}</p>
                                </div>
                                <p>{game.away_club_goals || "?"}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            )

    );
}

export default LeagueCard;
