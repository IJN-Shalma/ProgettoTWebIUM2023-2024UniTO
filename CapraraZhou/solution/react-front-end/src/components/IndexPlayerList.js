import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Loading from "./Loading";

/**
 * IndexPlayerList component
 * Rendered by Home page component, displays top three most valuable players
 */
function IndexPlayerList(){
    const [players, setPlayers] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios.get('/sql/players/topPlayers')
            .then(result => {
                setPlayers(result.data);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    },[]);

    return (
        loading ?
            (
                <Loading/>
            )
            :
            (
                <>
                    <Link to={"/leagues/league/" + players[1].currentClubDomesticCompetitionId + "/club/" + players[1].currentClubId +"/player/" + players[1].id} state={{player: players[1]}} className="button-link">
                        <div className="index-player-card d-flex flex-column align-items-center flex-grow-1 p-2 m-1 mt-3 clickable">
                            <p>2°</p>
                            <img alt="player_photo" className="rounded-1"
                                 src={players[1].imageUrl || "/images/default.png"}/>
                            <p>{players[1].playerName}</p>
                        </div>
                    </Link>

                    <Link to={"/leagues/league/" + players[0].currentClubDomesticCompetitionId + "/club/" + players[0].currentClubId +"/player/" + players[0].id} state={{player: players[0]}} className="button-link">
                        <div className="index-player-card d-flex flex-column align-items-center flex-grow-1 p-2 m-1 clickable">
                            <p>1°</p>
                            <img alt="player_photo" className="rounded-1"
                                 src={players[0].imageUrl || "/images/default.png"}/>
                            <p>{players[0].playerName}</p>
                        </div>
                    </Link>

                    <Link to={"/leagues/league/" + players[2].currentClubDomesticCompetitionId + "/club/" + players[2].currentClubId +"/player/" + players[1].id} state={{player: players[2]}} className="button-link">
                        <div className="index-player-card d-flex flex-column align-items-center flex-grow-1 p-2 m-1 mt-5 clickable">
                            <p>3°</p>
                            <img alt="player_photo" className="rounded-1"
                                 src={players[2].imageUrl || "/images/t.png"}/>
                            <p>{players[2].playerName}</p>
                        </div>
                    </Link>
                </>
            )
    );
}

export default IndexPlayerList;