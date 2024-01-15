import Breadcrumb from "../components/Breadcrumb";
import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import GameCardList from "../components/GameCardList";
import ClubCardList from "../components/ClubCardList";
import axios from "axios";
import Loading from "../components/Loading";

/**
 * League Page
 * @state leagueId - Fetched from URL
 * @state league - League object received from state or fetched using leagueId
 * @state years - List of years in which matches have been played
 * @state currentYear - Filter
 */
function League() {
    const {state} = useLocation();
    const [league, setLeague] = useState(null);
    const [years, setYears] = useState([]);
    const [currentYear, setCurrentYear] = useState(null);
    const [loading, setLoading] = useState(true);
    const {leagueId} = useParams();

    const seasonsRequest = axios.get("/mongo/games/competition/" + leagueId + "/seasons");
    const leagueRequest = axios.get("/sql/competitions/" + leagueId);
    const handleSelectChange = (event) =>{
        setCurrentYear(event.target.value);
    }

    useEffect(()=>{
        if(state == null){
            Promise.all([seasonsRequest, leagueRequest])
                .then((results)=>{
                    setYears(results[0].data);
                    setCurrentYear(results[0].data[results[0].data.length-1]);
                    setLeague(results[1].data);
                    setLoading(false);
                })
        }else{
            seasonsRequest.then(result => {
                setYears(result.data);
                setCurrentYear(result.data[result.data.length-1]);
                setLeague(state.league);
                setLoading(false);
            })
        }
    }, [state, leagueId])

    return (

        loading ?
            (
                    <Loading/>
            )
            :
            (
                <>
                    <Breadcrumb/>
                    <div className="container">
                        <div className="m-auto mx-lg-5 rounded-1 mt-3 d-lg-flex p-3 box-shadow">
                            <div className="d-flex flex-column align-items-center justify-content-center">
                                <img  src={"https://tmssl.akamaized.net/images/logo/header/" + league.competitionId.toLowerCase() + ".png" || "/images/default.png"} alt="Ligue 1 logo" width="180em"/>
                            </div>
                            <div className="p-3">
                                <h1>{league.name.replaceAll("-", " ").toUpperCase()}</h1>
                                <p><b>Type</b>: {league.subType.replaceAll("-", " ").replaceAll("_", " ").toUpperCase()}</p>
                                <p><b>Nation</b>: {league.countryName || "International"}</p>

                                <div className="d-flex flex-row align-items-center mt-2">
                                    <div>
                                        <p><b>Season</b>:</p>
                                    </div>
                                    <div>
                                        <select className="form-select d-inline ms-3" defaultValue={currentYear} onChange={handleSelectChange}>
                                            {
                                                years.map((year,i) => (
                                                    <option key={i} value={year} >{year}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-auto mx-lg-5 rounded-1 mt-3">
                            <div className="d-lg-flex">
                                <div className="me-lg-3 my-3">
                                    <div className="rounded-1 p-3 box-shadow">
                                        <h1>Clubs</h1>
                                        {
                                            league.domesticLeagueCode
                                                ?
                                                (
                                                    <ClubCardList request={"/sql/clubs/competition/" + league.domesticLeagueCode}/>
                                                )
                                                :
                                                (
                                                    <p>Can't load clubs in international leagues</p>
                                                )
                                        }

                                    </div>
                                </div>

                                <div className="flex-grow-1 ms-lg-3 my-3">
                                    <div className="rounded-1 p-3 box-shadow bb-item-list">
                                        <h1>Games</h1>
                                        <GameCardList
                                            request={'/mongo/games/competition/' + league.competitionId + '?year=' + currentYear}
                                            type={"league"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
    )
}

export default League;