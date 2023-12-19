import {useEffect, useState} from "react";
import axios from "axios";
import Loading from "./Loading";
import PlayerCard from "./PlayerCard";

function PlayerCardList({gameId,clubId}){

    const [lineup, setLineup] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/mongo/game_lineups/game/' + gameId + '/club/' + clubId)
            .then(response => {
                setLineup(response.data);
                setLoading(false);
            })
    }, []);



    return (
        loading ?
            (
                <Loading />
            )
            :
            (
                lineup.map((player, i) =>
                    <PlayerCard player={player} gameId={gameId} />
                )
            )
    )
}

export default PlayerCardList;