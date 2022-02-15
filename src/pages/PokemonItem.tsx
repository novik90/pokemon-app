import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { PokemonUrl } from "../models/pokemon";

const PokemonItem: FC<{ pokemon: PokemonUrl }> = (props) => {
    return (
        <li>
            <Link to={"pokemon/"+props.pokemon.name}>
                {props.pokemon.name}
            </Link>
        </li>
    );
};

export default PokemonItem;
