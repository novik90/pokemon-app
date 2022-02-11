import React from "react";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ComparePage from "./pages/ComparePage";
import PokemonPage from "./pages/PokemonPage";

function App() {
    return (
        <div>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/compare'>Compare Page</NavLink></li>
            <li><NavLink to='/pokemon'>Pokemon Page</NavLink></li>
          </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="compare" element={<ComparePage />} />
                <Route path="pokemon" element={<PokemonPage />} />
            </Routes>
        </div>
    );
}

export default App;
