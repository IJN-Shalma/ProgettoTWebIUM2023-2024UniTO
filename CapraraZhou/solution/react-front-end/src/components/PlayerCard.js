import {useEffect, useState, useLocation} from "react";
import axios from "axios";
import Loading from "./Loading";

function PlayerCard({player,gameId}) {
    const [playerImage, setPlayerImage] = useState("/images/default.png")
    const [gameEvent, setGameEvent] = useState(null);
    const [loadingGameEvents , setLoadingGameEvents] = useState(true);

    useEffect(() => {
        axios.get('/sql/players/'+player.player_id)
            .then((response) => {
                if(response.data && response.data[0] && response.data[0].imageUrl){
                    setPlayerImage(response.data[0].imageUrl)
                }
            })
            .catch((e) => {
                setPlayerImage("/images/default.png")
            })
    }, []);

    useEffect(() => {
        axios.get('/mongo/appearances/game/' +  gameId + '/player/' + player.player_id)
            .then((response) => {
                setGameEvent(response.data[0]);
                setLoadingGameEvents(false);
            })
    }, []);

    return (
        <div className="game-player-box d-flex align-items-center m-3 clickable p-1"> {/* Player box*/}
            <img
                src={playerImage}
                alt="player" height="100em" className="rounded-1"/>
            <div className="flex-grow-1  p-1">
                <p><b>{player.player_name || "Unknown"}</b></p>
                <p>{player.position}</p>
                {
                    gameId ?
                        (
                            loadingGameEvents ?
                                (
                                    <Loading />
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
    );
}

export default PlayerCard;