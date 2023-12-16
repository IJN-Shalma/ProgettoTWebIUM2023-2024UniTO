import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Leagues from "./pages/Leagues";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" exact component={Home}/>
                <Route path="/leagues" component={Leagues}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
