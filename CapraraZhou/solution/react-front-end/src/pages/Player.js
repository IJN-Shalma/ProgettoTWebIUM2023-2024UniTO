import Breadcrumb from "../components/Breadcrumb";
import {Link, useLocation, useParams} from "react-router-dom";
import AppearanceList from "../components/AppearanceList";
import {useEffect, useState} from "react";
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from "axios";
import Loading from "../components/Loading";

/**
 * Player page
 * @state playerId - Fetched from URL
 * @state player - Player object, received in state from other components or fetched with axios request using playerId
 */
function Player() {
    const {state} = useLocation();
    const [player, setPlayer] = useState(null);
    const [loading, setLoading] = useState(true);
    const {playerId} = useParams();

    useEffect(() => {
        if(state == null){
            axios.get(`/sql/players/` + playerId)
                .then(result => {
                    setPlayer(result.data[0]);
                    setLoading(false);
                });
        }else{
            setPlayer(state.player);
            setLoading(false);
        }
    }, [playerId, state]);

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
                        </div>

                        <div className="m-auto mx-lg-5 d-lg-flex">
                            <div className="flex-grow-1">
                                <div className="rounded-1 m-3 p-3 box-shadow bb-item-list">
                                    <h1>Recent Performances</h1>
                                    <AppearanceList playerId={player.id}/>
                                </div>
                            </div>
                            <div className="flex-grow-1">
                                <div className="rounded-1 m-3 p-3 box-shadow">
                                    <h1>Player Valuation</h1>
                                    <PlayerValuationChart playerId={player.id}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
    )
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

/**
 * PlayerValuationChart component
 * Line chart made with React ChartJS module, displays player valuation over time
 * @param playerId - player identifier used to fetch player valuations from database
 * @state valuations - player valuations received from database
 */
function PlayerValuationChart({ playerId }) {
    const [loading, setLoading] = useState(true);
    const [valuations, setValuations] = useState(null);

    useEffect(() => {
        axios.get(`/sql/valuations/` + playerId)
            .then((response) => {
                setValuations(response.data.reverse());
                setLoading(false);
            })
    }, [playerId]);

    const chartData = {
        labels: valuations ? valuations.map((val) => val.date) : [],
        datasets: [
            {
                label: 'Market Value In EUR',
                data: valuations ? valuations.map((val) => val.marketValueInEur) : [],
                borderColor: 'rgb(255, 99, 132)',
            },
        ],
    };

    const options = {
        scales: {
            x: {
                ticks: {
                    color: 'black', // Change the color of the x-axis labels
                },
            },
            y: {
                ticks: {
                    color: 'black', // Change the color of the y-axis labels
                },
            },
        },
        responsive: true,
        plugins: {
            legend: {
                display: false,
            }
        }
    };

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <Line data={chartData} options={options} />
            )}
        </div>
    );
}

export default Player;