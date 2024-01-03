import {useEffect, useState} from "react";
import axios from "axios";
import Loading from "./Loading";
import PlayerCard from "./PlayerCard";

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
    }, []);


    return (
        loading ?
            (
                <Loading/>
            )
            :
            (
                gameId
                    ?
                    (
                        playersLineups.map((playerLineup, i) =>
                            <PlayerCard playerLineup={playerLineup} gameId={gameId} key={i}/>
                        )
                    )
                    :
                    (
                        players.map((player, i) =>
                            <PlayerCard playerP={player} key={i}/>
                        )
                    )

            )
    )
}

export default PlayerCardList;