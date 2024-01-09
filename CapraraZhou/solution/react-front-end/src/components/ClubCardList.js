import {useEffect, useState} from "react";
import axios from "axios";
import ClubCard from "./ClubCard";
import Loading from "./Loading";

/**
 * ClubCardList component
 * Rendered by League.js page component, lists all the clubs returned by a query
 * @param request - Query to fetch clubs in a competition
 */
function ClubCardList({request}) {

    const [loading, setLoading] = useState(true);
    const [clubs, setClubs] = useState(null);

    useEffect(() => {
        axios.get(request)
            .then((response) => {
                setClubs(response.data);
                setLoading(false);
            })
    }, [request]);

    return (
        loading
            ?
            (
                <Loading/>
            )
            :
            (
                clubs.map((club,i) =>
                    <ClubCard club={club} key={i}/>
                )
            )

    )
}

export default ClubCardList;