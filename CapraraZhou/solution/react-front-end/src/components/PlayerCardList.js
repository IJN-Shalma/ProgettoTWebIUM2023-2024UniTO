import {useEffect, useState} from "react";
import axios from "axios";
import Loading from "./Loading";
import PlayerCard from "./PlayerCard";

function PlayerCardList({gameId, clubId}) {

    const [players, setPlayers] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("PlayerCardList - clubId: " + clubId + " gameId: " + gameId)
        if (clubId && gameId) {
            console.log("From Game")
            axios.get('/mongo/game_lineups/game/' + gameId + '/club/' + clubId)
                .then(response => {
                    setPlayers(response.data);
                    setLoading(false);
                })
        } else {
            console.log("From Club")
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
                players.map((player, i) =>
                    <PlayerCard player={player} gameId={gameId}/>
                )
            )
    )
}

export default PlayerCardList;