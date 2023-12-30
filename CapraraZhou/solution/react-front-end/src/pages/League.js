import Breadcrumb from "../components/Breadcrumb";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import GameCardList from "../components/GameCardList";
import ClubCardList from "../components/ClubCardList";

function League() {

    const {state} = useLocation();
    const league = state.league;
    const [year, setYear] = useState("2023")

    return (
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
                        <p><b>Nation</b>: {league.domesticLeagueCode || "International"}</p>
                        <p><b>Home Win%</b>: -</p>
                        <p><b>Away Win%</b>: -</p>
                        <p><b>Draw%</b>: -</p>
                        <p><b>Avg Goals/Game</b>: -</p>


                        <div className="d-flex flex-row align-items-center mt-2">
                            <div>
                                <p><b>Season</b>:</p>
                            </div>
                            <div>
                                <select className="form-select d-inline ms-3">
                                    <option value="2023" selected>2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
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
                                    request={'/mongo/games/competition/' + league.competitionId + '?year=' + year}
                                    type={"league"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default League;