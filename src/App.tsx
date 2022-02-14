import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PokemonUrl from "./models/pokemonUrl";
import { useEffect, useState } from "react";
import PokemonDetails from "./pages/PokemonDetails";

const App = () => {
    const [pokemons, setPokemons] = useState<PokemonUrl[]>([]);

    async function fetchPokemons() {
        await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=-1")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPokemons(data.results);
            });
    }

    useEffect(() => {
        fetchPokemons();
    }, []);

    return (
        <div>
            <ul className="nav">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home pokemon={pokemons} />} />
                <Route path="pokemon/:name" element={<PokemonDetails />} />
            </Routes>
        </div>
    );
};

export default App;
