import {useEffect, useState} from "react";
import axios from "axios";
import Loading from "./Loading";
import PlayerCard from "./PlayerCard";
import game from "../pages/Game";
import player from "../pages/Player";

function PlayerCardList({gameId, clubId}) {
    const [playersLineups, setPlayersLineups] = useState(null);
    const [players, setPlayers] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (clubId && gameId) {
            axios.get('/mongo/game_lineups/game/' + gameId + '/club/' + clubId)
                .then(response => {
                    setPlayersLineups(response.data);
                    setLoading(false);
                })
        } else {
            axios.get('/sql/players/club/' + clubId)
                .then(response => {
                    setPlayers(response.data);
                    setLoading(false);
                })
        }
    }, [clubId, gameId]);

    return (
        <>
            {
                loading ?
                (
                    <Loading/>
                )
                :
                (
                    gameId
                        ?
                        (
                            playersLineups.length > 0
                                ?
                                playersLineups.map((playerLineup, i) =>
                                    <PlayerCard playerLineup={playerLineup} gameId={gameId} key={i}/>
                                )
                                :
                                <p>No Data</p>
                        )
                        :
                        (
                            players.length > 0
                                ?
                                players.map((player, i) =>
                                    <PlayerCard playerP={player} key={i}/>
                                )
                                :
                                <p>No Data</p>
                        )

                )
            }
        </>
    )
}

export default PlayerCardList;