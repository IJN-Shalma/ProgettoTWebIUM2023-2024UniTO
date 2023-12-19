import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Leagues from "./pages/Leagues";
import League from "./pages/League";
import Club from "./pages/Club";
import Game from "./pages/Game";
import Player from "./pages/Player";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/leagues" element={<Leagues/>}/>
                <Route path="/leagues/league/:leagueId" element={<League/>}/>
                <Route path="/leagues/league/:leagueId/club/:clubId" element={<Club/>}/>
                <Route path="/leagues/league/:leagueId/game/:gameId" element={<Game/>}/>
                <Route path="/leagues/league/:leagueId/club/:clubId/player/:playerName" element={<Player/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
