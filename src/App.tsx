import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PokemonDetails from "./pages/PokemonDetails";

const App = () => {
    return (
        <div>
            <nav>
                <ul className="nav">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path=":name" element={<PokemonDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;
