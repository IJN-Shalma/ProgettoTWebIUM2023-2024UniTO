import GameCardList from '../components/GameCardList';
import LeagueCardList from "../components/LeagueCardList";
import IndexPlayerList from "../components/IndexPlayerList";

function Home() {
    return (
        <>
            <div className="container d-lg-flex mb-3">
                <div className="ratio-70 p-2">
                    <main id="topleagues" className="rounded-1 p-2 box-shadow">
                        <h1>Top Leagues</h1>
                        <div className="d-flex flex-wrap justify-content-evenly ">
                            <LeagueCardList/>
                        </div>
                    </main>
                </div>

                <div className="ratio-30 p-2">
                    <aside className="d-flex flex-column rounded-1 p-2 mb-3 box-shadow bb-item-list">
                        <h1>Recent Games</h1>
                        <GameCardList request={'/mongo/games/last_games?n=4'} type={'index'}/>
                    </aside>

                    <aside className="rounded-1 p-2 mb-3 box-shadow">
                        <h1>Most Valuable Players</h1>
                        <div className="d-flex justify-content-evenly flex-row ">
                            <IndexPlayerList/>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    )
}

export default Home;