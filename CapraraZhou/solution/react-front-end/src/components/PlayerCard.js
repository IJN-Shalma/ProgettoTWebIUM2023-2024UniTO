import {useEffect, useState} from "react";
import axios from "axios";
import Loading from "./Loading";
import {Link} from "react-router-dom";

/* Pass the component a player object or a lineup with an Id to fetch the player from */
/* Players might still return as undefined because their id isn't in the players dataset */

/**
 * PlayerCard component
 * @param playerLineup - prop received from parent component, if set it is used to fetch player information with axios
 * @param playerP - player data received as a prop from parent component
 * @param gameId - if set, player card is rendered in game page and displays player game events
 */
function PlayerCard({playerLineup, playerP, gameId}) {
    const [player, setPlayer] = useState(null);
    const [loadingPlayer, setLoadingPlayer] = useState(true);
    const [gameEvent, setGameEvent] = useState(null);
    const [loadingGameEvents, setLoadingGameEvents] = useState(true);

    useEffect(() => {
        if (!playerP) {
            axios.get('/sql/players/' + playerLineup.player_id)
                .then((response) => {
                    setPlayer(response.data[0])
                    setLoadingPlayer(false);
                })
                .catch((e) => console.log(e));
        } else {
            setPlayer(playerP);
            setLoadingPlayer(false);
        }
    }, [playerLineup, playerP]);

    useEffect(() => {
        if (player && gameId) {
            axios.get('/mongo/appearances/game/' + gameId + '/player/' + player.id)
                .then((response) => {
                    setGameEvent(response.data[0]);
                    setLoadingGameEvents(false);
                })
                .catch((e) => console.log(e))
        }
    }, [gameId, player]);

    return (
        <>

            {loadingPlayer
            ?
            (
                <div className="my-5">
                    <Loading/>
                </div>
            )
            :
            (
                player ? (
                        <Link
                            to={"/leagues/league/" + player.currentClubDomesticCompetitionId + "/club/" + player.currentClubId + "/player/" + player.id}
                            state={{player: player}} className="button-link link-list-item">
                            <div className="game-player-box d-flex align-items-center m-3 clickable p-1">
                                <img
                                    src={player.imageUrl || "/images/default.png"}
                                    alt="player" height="100em" className="rounded-1"/>
                                <div className="flex-grow-1  p-1">

                                    <p><b>{player.playerName || "Unknown"}</b></p>

                                    <p>{player.position}</p>
                                    {(gameId) ? <></> : <p>{"Last year: " + player.lastSeason}</p>}
                                    {
                                        gameId ?
                                            (
                                                loadingGameEvents ?
                                                    (
                                                        <Loading/>
                                                    )
                                                    :
                                                    (
                                                        <div className="d-flex flex-wrap">
                                                            <p>🟥: {(gameEvent && gameEvent.red_cards) ? gameEvent.red_cards : "0"}</p>
                                                            <p>🟨: {(gameEvent && gameEvent.yellow_cards) ? gameEvent.yellow_cards : "0"}</p>
                                                            <p>⚽: {(gameEvent && gameEvent.goals) ? gameEvent.goals : "0"}</p>
                                                            <p>🤚: {(gameEvent && gameEvent.assists) ? gameEvent.assists : "0"}</p>
                                                            <p>🕐: {(gameEvent && gameEvent.minutes_played) ? gameEvent.minutes_played : "0"}</p>
                                                        </div>
                                                    )
                                            )
                                            :
                                            (
                                                <></>
                                            )
                                    }
                                </div>
                            </div>
                        </Link>
                    )
                    :
                    null
            )}
        </>
    );
}

export default PlayerCard;