import Breadcrumb from "../components/Breadcrumb";
import {Link, useLocation} from "react-router-dom";
import AppearanceList from "../components/AppearanceList";


function Player() {

    const {state} = useLocation();
    const player = state.player;
    console.log(player)


    return (
        <>
            <Breadcrumb/>
            <div className="container">
                <div className="m-auto mx-lg-5 rounded-1 align-items-center mt-3 d-lg-flex p-3 box-shadow">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <img
                            src={player.imageUrl || "/images/default.png"}
                            alt="player_photo" width="250em" className="rounded-1"/>
                    </div>
                    <div className="p-3 flex-grow-1">
                        <h1>{player.playerName}</h1>
                        <p><b>Nationality</b>: {player.countryOfBirth}</p>
                        <p><b>Date of Birth</b>: {player.dateOfBirth}</p>
                        <p><b>Height</b>: {player.heightInCm + "cm"}</p>
                        <p><b>Role</b>: {player.subPosition}</p>
                        <p><b>Club</b>: {player.currentClubName}</p>
                        <p><b>Goals</b>: {"-"}</p>
                        <p><b>Average Goals/Game</b>: {"-"}</p>
                        <p><b>Matches played</b>: {"-"}</p>
                        <p><b>Assists</b>: {"-"}</p>
                        <p><b>Average Assists/Game</b>: {"-"}</p>
                    </div>
                    <Link to={"/leagues/league/" + null + "/club/" + player.currentClubId}
                          state={{clubId: player.currentClubId}} className="button-link">
                        <img src={"https://tmssl.akamaized.net/images/wappen/normquad/" + player.currentClubId+ ".png" || "/images/default.png"} alt={player.CurrentClubName + " logo"}
                             className="align-self-center" height="200em"/>
                    </Link>
                </div>

                <div className="m-auto mx-lg-5 d-lg-flex">
                    <div className="flex-grow-1">
                        <div className="rounded-1 m-3 p-3 box-shadow bb-item-list">
                            <h1>Recent Performances</h1>
                            <AppearanceList request={'/mongo/appearances/player/' + player.id}/>
                        </div>
                    </div>
                    <div className="flex-grow-1">
                        <div className="rounded-1 m-3 p-3 box-shadow">
                            <h1>Player Evaluation</h1>
                            <canvas id="myChart" className=" rounded-1 p-3"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Player;