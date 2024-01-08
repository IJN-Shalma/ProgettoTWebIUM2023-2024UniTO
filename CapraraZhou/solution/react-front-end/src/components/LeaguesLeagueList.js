import axios from "axios";
import {useEffect, useState} from "react";
import LeagueCard from "./LeagueCard";
import Loading from "./Loading";

function IndexLeagueCardList({query, filter}){
    const [leagues, setLeagues] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(query)
            .then((response) => {
                setLeagues(response.data);
                setLoading(false);
            })
            .catch((e) => console.log(e));
    }, [query]);

    return (
        loading
            ? <Loading/>
            : Array.isArray(leagues)
                ? (leagues.filter(league => {
                    if (filter !== ""){
                        return league.countryName === filter;
                    }else{
                        return true;
                    }
                }).map((league,i) => (
                    !league.name.includes("qualifikation") && <LeagueCard league={league} key={i}/>
                )))
                : <LeagueCard league={leagues}/>
    );
}


export default IndexLeagueCardList;
