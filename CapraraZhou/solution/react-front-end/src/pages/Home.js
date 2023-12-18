import GameCard from '../components/GameCard';
import LeagueCardList from "../components/LeagueCardList";

function Home() {
    /*
    let league = {
        leagueName: "Uefa Champions League",
        homeTeam: "FC Bayern München",
        awayTeam: "Football Club København",
        homeTeamScore: 0,
        awayTeamScore: 0
    };
    */

    let game = {
        id: 111111,
        leagueCode: "EL",
        homeTeam: "home team",
        awayTeam: "away team",
        date: "2023-11-30",
        score: "4:3"
    };

    return (
        <>
            <div className="container d-lg-flex">
                <div className="ratio-70 p-2">
                    <main id="topleagues" className="rounded-1 p-2 box-shadow">
                        <h1>Top Leagues</h1>
                        <div className="d-flex flex-wrap justify-content-evenly ">
                            <LeagueCardList/>
                            {/*
                            <LeagueCard league={league}/>
                            <LeagueCard league={league}/>
                            <LeagueCard league={league}/>
                            <LeagueCard league={league}/>
                            <LeagueCard league={league}/>
                            <LeagueCard league={league}/>
                            <LeagueCard league={league}/>
                            <LeagueCard league={league}/>
                            */}
                        </div>
                    </main>
                </div>

                <div className="ratio-30 p-2">
                    <aside className="d-flex flex-column rounded-1 p-2 mb-3 box-shadow bb-item-list">
                        <h1>Recent Games</h1>
                        <GameCard game={game}/>
                        <GameCard game={game}/>
                        <GameCard game={game}/>
                        <GameCard game={game}/>
                    </aside>

                    {/*<aside className="rounded-1 p-2 mb-3 box-shadow">
                        <h1>Most Valuable Players</h1>
                        <div className="d-flex justify-content-evenly flex-row ">
                            <Link to="" className="button-link">
                                <div
                                    className="index-player-card d-flex flex-column align-items-center flex-grow-1 p-2 m-1 mt-3 clickable">
                                    <p>2°</p>
                                    <img alt="player_photo" className="rounded-1"
                                         src="https://img.a.transfermarkt.technology/portrait/header/342229-1682683695.jpg?lm=1"/>
                                    <p>Kylian Mbappé</p>
                                </div>
                            </Link>
                            <Link to="" className="button-link"
                               aria-label="Most valuable player Erling Haaland"
                               title="Most valuable player Erling Haaland"
                               role="button">
                                <div
                                    className="index-player-card d-flex flex-column align-items-center flex-grow-1 p-2 m-1 clickable">
                                    <p>1°</p>
                                    <img alt="player_photo" className="rounded-1"
                                         src="https://img.a.transfermarkt.technology/portrait/header/418560-1694590614.jpg?lm=1"/>
                                    <p>Erling Haaland</p>
                                </div>
                            </Link>
                            <Link to="" className="button-link"
                               aria-label="Third most valuable player Vinicius Junior"
                               title="Third most valuable player Vinicius Junior" role="button">
                                <div
                                    className="index-player-card d-flex flex-column align-items-center flex-grow-1 p-2 m-1 mt-5 clickable">
                                    <p>3°</p>
                                    <img alt="player_photo" className="rounded-1"
                                         src="https://img.a.transfermarkt.technology/portrait/header/371998-1664869583.jpg?lm=1"/>
                                    <p>Vinicius Junior</p>
                                </div>
                            </Link>
                        </div>
                    </aside>*/}
                </div>
            </div>
        </>
    )
}

export default Home;