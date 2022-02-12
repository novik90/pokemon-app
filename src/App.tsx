import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PokemonUrl from "./models/pokemonUrl";
import { useEffect, useState } from "react";
import PokemonDetails from "./pages/PokemonDetails";

const App = () => {
    const [pokemons, setPokemons] = useState<PokemonUrl[]>([]);

    useEffect(() => {
        fetchPokemons();
    }, []);

    async function fetchPokemons() {
        await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=-1")
            .then((response) => {
                return response.json();
            })
            .then((data) => setPokemons(data.results));
    }

    return (
        <div>
            <ul className="nav">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home poke={pokemons}/>} />
                <Route
                    path="*"
                    element={
                        <main>
                            <p>No pokemon found</p>
                        </main>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
