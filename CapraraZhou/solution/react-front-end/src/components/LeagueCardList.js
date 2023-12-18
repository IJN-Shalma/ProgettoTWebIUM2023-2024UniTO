import axios from "axios";
import {useEffect, useState} from "react";
import LeagueCard from "./LeagueCard";

function LeagueCardList(){
    const [intLeagues, setIntLeagues] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8081/competitions/international")
            .then((response) => {
                /*setIntLeagues(response.data)*/ console.log(response.data);})
            .catch((e) => console.log(e));
    }, []);

    useEffect(() => {
        return (
            intLeagues ? (
                intLeagues.map((intLeague) => (
                    <LeagueCard league={intLeague} />
                ))
            ) : (
               () => {<>Error</>}
            )
        );
    }, [intLeagues]);

}


export default LeagueCardList;
