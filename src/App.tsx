import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PokemonDetails from "./pages/PokemonDetails";
import classes from "./App.module.css";

const App = () => {
    return (
        <div>
            <nav className={classes.mainNav}>
                <ul className={classes.nav}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={classes.container}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path=":name" element={<PokemonDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
