import {useEffect, useState} from "react";
import Loading from "./Loading";
import axios from "axios";
import GameCard from "./GameCard";
import app from "../App";

function AppearanceList({request}) {
    const [appearances, setAppearances] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(request)
            .then((response) => {
                setAppearances(response.data)
                setLoading(false)
            })
    }, []);

    return (
        loading ?
            (
                <Loading/>
            )
            :
            (
                appearances.map((appearance, i) =>
                    <Appearance appearance={appearance} key={i}/>
                )
            )
    )
}

export default AppearanceList;

function Appearance({appearance}) {
    const [loadingGame, setLoadingGame] = useState(true);
    const [game, setGame] = useState(null);

    useEffect(() => {
        axios.get('/mongo/games/game/' + appearance.game_id)
            .then((response) => {
                setGame(response.data[0])
                setLoadingGame(false)
            })
    }, []);

    return (
        <div className="d-flex flex-column">
            {
                loadingGame
                    ?
                    (
                        <Loading/>
                    ) : (
                        <GameCard game={game} type={"player"}/>
                    )
            }

            <div class={"d-flex justify-content-center"}>
                <p>🟥: {appearance.yellow_cards}</p>
                <p>🟨: {appearance.red_cards}</p>
                <p>⚽: {appearance.goals}</p>
                <p>🤚: {appearance.assists}</p>
                <p>🕑: {appearance.minutes_played}</p>
            </div>
        </div>
    )
}