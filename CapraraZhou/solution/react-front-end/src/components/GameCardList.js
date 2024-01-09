import axios from "axios";
import {useEffect, useState} from "react";
import GameCard from "./GameCard";
import Loading from "./Loading";

/**
 * GameCardList component
 * Rendered by ClubCardList component, renders a list of Game Cards
 * @param request - Query, different pages fetch from different routes
 * @param type - Passed to GameCard to filter the displayed data
 */

function GameCardList({request, type}){
    const [games, setGames] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios.get(request)
            .then(result => {
                setGames(result.data);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    },[request]);

    return (
        loading ?
            (
                <Loading/>
            )
            :
            (
                games.map((game, i) => (
                    <GameCard game={game} type={type} key={i}/>
                ))
            )
    );
}

export default GameCardList;