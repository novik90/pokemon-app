import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PokemonDetails from "./pages/PokemonDetails";
import classes from "./App.module.css";
import ComparePage from "./pages/ComparePage";

const App = () => {
    return (
        <div>
            <nav className={classes.mainNav}>
                <ul className={classes.nav}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="compare">Compare</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={classes.container}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="compare" element={<ComparePage />} />
                    <Route path=":name" element={<PokemonDetails />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
