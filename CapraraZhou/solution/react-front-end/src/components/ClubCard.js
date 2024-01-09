import {Link} from "react-router-dom";

/**
 * ClubCard component
 * Rendered by ClubCardList component
 * @param club - Club object
 */
function ClubCard({club}) {
    return (
        <Link to={"/leagues/league/" + club.domesticCompetitionId + "/club/" + club.id} className="button-link">
            <div className="rounded-1 mt-3 p-1 clickable">
                <div className="d-flex align-items-center">
                    <img alt="Paris Saint-Germain logo" src={"https://tmssl.akamaized.net/images/wappen/normquad/" + club.id + ".png" || "/images/default.png"} className="rounded-1 club-logo"/>
                    <div className="p-2">
                        <b>{club.name}</b>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ClubCard;