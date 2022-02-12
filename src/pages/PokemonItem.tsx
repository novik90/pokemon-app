import React, { FC, useEffect, useState } from "react";
import PokemonUrl from "../models/pokemonUrl";

const PokemonItem: FC<{ pokemon: PokemonUrl }> = (props) => {

    const [img, setImg] = useState<string>();

    const handler = () => {
        async function fetchPokemons() {
            await fetch(props.pokemon.url)
                .then((response) => {
                    return response.json();
                }).then(data => {
                    console.log(data.sprites.front_default)
                    setImg(data.sprites.front_default);
                })
        }
        return fetchPokemons();
    }

    return (
        <li>
            <a onClick={handler} href={'#'}>{props.pokemon.name}</a>
            <img src={img} alt="" />
        </li>
    );
};

export default PokemonItem;
