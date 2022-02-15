import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./PokemonDetails.module.css";
import { Pokemon } from "../models/pokemon";

const PokemonDetails = () => {
    const [pokemonObject, setPokemonObject] = useState<Pokemon>();
    const params = useParams();

    const fetchPokemons = async () => {
        await fetch("https://pokeapi.co/api/v2/pokemon/" + params.name)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPokemonObject(data);
            });
    };

    useEffect(() => {
        fetchPokemons();
    }, []);

    return (
        <div>
            <h1>
                {pokemonObject?.name.replace(
                    pokemonObject?.name[0],
                    pokemonObject?.name[0].toUpperCase()
                )}
            </h1>
            <div className={classes.common}>
                <div className={classes.common__item}>
                    <img
                        alt={pokemonObject?.name}
                        src={pokemonObject?.sprites?.front_default}
                    ></img>
                </div>
                <div className={classes.common__item}>
                    <p>Height</p>
                    <span>{pokemonObject?.height}</span>
                </div>
                <div className={classes.common__item}>
                    <p>Weight</p>
                    <span>{pokemonObject?.weight}</span>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetails;
