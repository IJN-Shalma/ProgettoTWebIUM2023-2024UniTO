import axios from "axios";
import {useEffect, useState} from "react";
import LeagueCard from "./LeagueCard";
import Loading from "./Loading";

function IndexLeagueCardList(){
    const [intLeagues, setIntLeagues] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get("/sql/competitions/international")
            .then((response) => {
                setIntLeagues(response.data);
                setLoading(false);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        loading ?
            (
                <Loading/>
            )
            :
            (
                intLeagues.map((intLeague,i) => (
                        !intLeague.name.includes("qualifikation") && <LeagueCard league={intLeague} key={i}/>
                    ))
            )
    );
}


export default IndexLeagueCardList;
