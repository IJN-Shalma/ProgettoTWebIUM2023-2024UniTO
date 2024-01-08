import axios from "axios";
import {useEffect, useState} from "react";
import GameCard from "./GameCard";
import Loading from "./Loading";

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