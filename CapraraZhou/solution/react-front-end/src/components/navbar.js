import {Link} from "react-router-dom";

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navigation">
            <div className="container-fluid">
                <a className="navbar-brand mx-5 title">Football X Data</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/leagues" className="nav-link active">Leagues</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-5" type="search" placeholder="Search League, Club, Player" aria-label="Search leagues, clubs or players" aria-placeholder="Search League, Club, Player"/>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;