import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import PokemonUrl from "../models/pokemonUrl";

const PokemonItem: FC<{ pokemon: PokemonUrl }> = (props) => {
    const [img, setImg] = useState<string>();

    const handler = () => {
        async function fetchPokemons() {
            await fetch(props.pokemon.url)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setImg(data.sprites.front_default);
                });
        }
        return fetchPokemons();
    };

    return (
        <li>
            <Link onClick={handler} to={"#"}>
                {props.pokemon.name}
            </Link>
            <img  src={img}/>
        </li>
    );
};

export default PokemonItem;
