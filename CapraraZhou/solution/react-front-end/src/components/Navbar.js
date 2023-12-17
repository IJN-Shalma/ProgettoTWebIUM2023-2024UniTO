import React, {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar(){
    const location = useLocation();
    const [url, setUrl] = useState(null);
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navigation mb-3">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand mx-lg-5 title">Football X Data</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className={"nav-link " + (url === '/' ? "active" : "")}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/leagues" className={"nav-link " + (url === '/leagues' ? "active" : "")}>Leagues</Link>
                            </li>
                        </ul>
                        <form className="d-flex search" role="search">
                            <input className="form-control" type="search" placeholder="League, Club, Player" aria-label="Search leagues, clubs or players" aria-placeholder="Search League, Club, Player"/>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;