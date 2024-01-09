import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import axios, {Axios} from "axios";

/**
 * Navbar component
 * Made with boostrap navbar component
 */
function Navbar() {
    const location = useLocation();
    const [url, setUrl] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);

    const [searchTerm, setSearchTerm] = useState("");

    function handleSearchChange(event) {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navigation mb-3">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand mx-lg-5 title">Football X Data</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className={"nav-link " + (url === '/' ? "active" : "")}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/leagues"
                                      className={"nav-link " + (url === '/leagues' ? "active" : "")}>Leagues</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/chat"
                                      className={"nav-link " + (url === '/chat' ? "active" : "")}>Chat</Link>
                            </li>
                        </ul>
                        <form className="d-flex search" role="search" onSubmit={handleSubmit}>
                            <input className="form-control" type="search" placeholder="League, Club, Player"
                                   aria-label="Search leagues, clubs or players"
                                   aria-placeholder="Search League, Club, Player"
                                   value={searchTerm}
                                   onChange={handleSearchChange}/>
                            <div id="navbar-suggestion-list" className="box-shadow">
                                <LeaguesSuggestionList searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                                <ClubsSuggestionList searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                                <PlayersSuggestionList searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}

/**
 * PlayerSuggestionList component
 * @param searchTerm - Part of parent state, navbar search bar input value, used to fetch suggestions
 * @param setSearchTerm - Part of parent state, function used to reset search term on submit
 */
function PlayersSuggestionList({searchTerm, setSearchTerm }) {
    const [suggestions, setSuggestions] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (searchTerm.trim() !== "") {
            axios.get(`/sql/players/suggestions/` + searchTerm)
                .then((response) => {
                    setSuggestions(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching player suggestions:", error);
                    setLoading(false);
                });
        } else {
            setSuggestions([]);
            setLoading(true);
        }
    }, [searchTerm]);

    return (
        <>
            {(loading)
                ?
                null
                :
                (
                    <>
                        <p className="divider">Players</p>
                        {
                            suggestions.length <= 0
                                ?
                                <p>No Results</p>
                                :
                                suggestions.map((suggestion, i) => (
                                <Link
                                    to={"/leagues/league/" + suggestion.currentClubDomesticCompetitionId + "/club/" + suggestion.currentClubId + "/player/" + suggestion.playerName}
                                    state={{player: suggestion}} onClick={() => setSearchTerm('')} className="button-link" key={i}>
                                    <p>{suggestion.playerName}</p>
                                </Link>
                                ))
                        }
                    </>
                )}
        </>
    );
}

/**
 * ClubsSuggestionList component
 * @param searchTerm - Part of parent state, navbar search bar input value, used to fetch suggestions
 * @param setSearchTerm - Part of parent state, function used to reset search term on submit
 */
function ClubsSuggestionList({searchTerm, setSearchTerm }) {
    const [suggestions, setSuggestions] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (searchTerm.trim() !== "") {
            axios.get(`/sql/clubs/suggestions/` + searchTerm)
                .then((response) => {
                    setSuggestions(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching clubs suggestions:", error);
                    setLoading(false);
                });
        } else {
            setSuggestions([]);
            setLoading(true);
        }
    }, [searchTerm]);

    return (
        <>
            {(loading) ?
                null : (
                    <>
                        <p className="divider">Clubs</p>
                        {
                            suggestions.length <= 0
                                ?
                                <p>No Results</p>
                                :
                                suggestions.map((suggestion, i) => (
                                    <Link to={"/leagues/league/" + suggestion.domesticCompetitionId + "/club/" + suggestion.id}
                                          state={{club: suggestion}} onClick={() => setSearchTerm('')} className="button-link" key={i}>
                                        <p>{suggestion.name}</p>
                                    </Link>
                                ))
                        }
                    </>
                )}
        </>
    );
}

/**
 * ClubsSuggestionList component
 * @param searchTerm - Part of parent state, navbar search bar input value, used to fetch suggestions
 * @param setSearchTerm - Part of parent state, function used to reset search term on submit
 */
function LeaguesSuggestionList({searchTerm, setSearchTerm }) {
    const [suggestions, setSuggestions] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (searchTerm.trim() !== "") {
            axios.get(`/sql/competitions/suggestions/` + searchTerm)
                .then((response) => {
                    setSuggestions(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching competitions suggestions:", error);
                    setLoading(false);
                });
        } else {
            setSuggestions([]);
            setLoading(true);
        }
    }, [searchTerm]);

    return (
        <>
            {(loading) ?
                null :
                (
                    <>
                        <p className="divider">Competitions</p>
                        {
                            suggestions.length <= 0
                                ?
                                <p>No Results</p>
                                :
                                suggestions.map((suggestion, i) => (
                                <Link to={"/leagues/league/" + suggestion.competitionId} state={{league: suggestion}} onClick={() => setSearchTerm('')}
                                      className="button-link" key={i}>
                                    <p>{suggestion.name}</p>
                                </Link>
                                ))
                        }
                    </>
                )}
        </>
    );
}

export default Navbar;