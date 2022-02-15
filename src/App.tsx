import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { PokemonUrl } from "./models/pokemon";
import { useEffect, useState } from "react";
import PokemonDetails from "./pages/PokemonDetails";

const App = () => {
    

    return (
        <div>
            <ul className="nav">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="pokemon/:name" element={<PokemonDetails />} />
            </Routes>
        </div>
    );
};

export default App;
