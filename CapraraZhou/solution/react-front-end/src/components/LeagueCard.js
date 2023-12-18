import {Link} from "react-router-dom";

function LeagueCard({league}){
    return (
        <Link to="/league/:leagueName" className="button-link">
            <div className="d-flex flex-column m-3 index-league-box p-2 clickable">
                <div className="d-flex align-items-center justify-content-between">
                    <img alt="League Logo" src="/images/default.png" className="index-league-logo"/>
                    <h2 className="m-2 accent">{league.leagueName}</h2>
                </div>
                <div className="d-flex flex-column mt-2"> {/* last game */}
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <img alt="away-team logo" src="/images/default.png" className="index-club-logo mx-1" />
                            <p>{league.homeTeam}</p>
                        </div>
                        <p>{league.homeTeamScore}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <img alt="away-team logo" src="/images/default.png" className="index-club-logo mx-1" />
                            <p>{league.awayTeam}</p>
                        </div>
                        <p>{league.awayTeamScore}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default LeagueCard;
