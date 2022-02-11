import React, { useEffect, useState } from "react";

type pokemons = {
    name: string;
    url: string;
}

const Home = () => {
    const [pok, setPok] = useState<pokemons[]>();

    useEffect(() => {
        fetchPokemons();
    }, [])

    const fetchPokemons = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/').then(response => {
            return response.json();
        }).then((data) => {
            setPok(data.results);
        })
    }
    
    return (
        <div>
            <h2>Home Page</h2>
            {pok?.map(i => <p key={i.url}>{i.name}</p>)}
        </div>
    );
};

export default Home;
