import Breadcrumb from "../components/Breadcrumb";
import {useLocation} from "react-router-dom";
import PlayerCard from "../components/PlayerCard";
import PlayerCardList from "../components/PlayerCardList";
import GameCardList from "../components/GameCardList";
import {useEffect, useState} from "react";
import axios from "axios";
import Loading from "../components/Loading";

function Club() {

    const {state} = useLocation();
    const [club, setClub] = useState(state.club);
    const clubId = state.clubId || state.club.id;
    const [loading, setLoading] = useState(true)
    console.log(clubId)

    useEffect(() => {
        if (!club) {
            console.log("Have just club Id")
            axios.get('/sql/clubs/' + clubId)
                .then((response) => {
                    setClub(response.data)
                    setLoading(false)
                })
        }
        else{
            console.log("Have full club")
            setLoading(false)
        }
    }, []);


    return (
        <>
            <Breadcrumb/>
            <div className="container">
                {
                    loading
                        ?
                        (
                            <Loading/>
                        )
                        :
                        (
                            <>
                                <div className="m-auto mx-lg-5 rounded-1 mt-3 d-lg-flex p-3 box-shadow">
                                    <div className="d-flex flex-column align-items-center">
                                        <img
                                            src={"https://tmssl.akamaized.net/images/wappen/normquad/" + club.id + ".png" || "/images/default.png"}
                                            alt="club_photo" width="250em" height="250em"/>
                                    </div>
                                    <div className="p-3">
                                        <h1>{club.name || "-"}</h1>
                                        <p><b>Domestic Competition</b>: {club.domesticCompetitionId || "-"}</p>
                                        <p><b>Net transfer</b>: {club.netTransferRecord || "-"}</p>
                                        <h2>Squad information</h2>
                                        <p><b>Squad Size</b>: {club.squadSize || "-"}</p>
                                        <p><b>Average Age</b>: {club.averageAge || "-"}</p>
                                        <h2>Stadium</h2>
                                        <p><b>Stadium Name</b>: {club.stadiumName || "-"}</p>
                                        <p><b>Stadium Seats</b>: {club.stadiumSeats || "-"}</p>
                                    </div>
                                </div>
                                <div className="m-auto mx-lg-5 d-lg-flex">
                                    <div className="flex-grow-1">
                                        <div className="rounded-1 m-3 p-3 box-shadow bb-item-list">
                                            <h1>Players</h1>
                                            <PlayerCardList clubId={clubId}/>
                                        </div>
                                    </div>

                                    <div className="flex-grow-1">
                                        <div className="rounded-1 m-3 p-3 box-shadow bb-item-list">
                                            <h1>Recent games</h1>
                                            <GameCardList request={'/mongo/games/club/' + clubId} type={"club"}/>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                }
            </div>
        </>
    )
}

export default Club;