import {useEffect, useState} from "react";
import axios from "axios";
import ClubCard from "./ClubCard";
import Loading from "./Loading";

function ClubCardList({request}) {

    const [loading, setLoading] = useState(true);
    const [clubs, setClubs] = useState(null);

    useEffect(() => {
        axios.get(request)
            .then((response) => {
                setClubs(response.data);
                setLoading(false);
            })
    }, []);

    return (
        loading
            ?
            (
                <Loading/>
            )
            :
            (
                clubs.map((club) =>
                    <ClubCard club={club}/>
                )
            )

    )
}

export default ClubCardList;