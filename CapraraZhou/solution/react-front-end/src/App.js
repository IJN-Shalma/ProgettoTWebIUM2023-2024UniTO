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
                <Route path="/league/:id" element={<League/>}/>
                <Route path="/club/:id" element={<Club/>}/>
                <Route path="/game/:id" element={<Game/>}/>
                <Route path="/player/:id" element={<Player/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
