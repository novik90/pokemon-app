import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pokemon from "../models/pokemon";
import classes from "./PokemonDetails.module.css";

const PokemonDetails = () => {

    const [pokemonObject, setPokemonObject] = useState<Pokemon>();

    const params = useParams();

    const fetchPokemonDetails = () => {
        async function fetchPokemons() {
            await fetch('https://pokeapi.co/api/v2/pokemon/'+params.name)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setPokemonObject(data);
                });
        }
        return fetchPokemons();
    };

    useEffect(() => {
        fetchPokemonDetails();
    }, []);

    return (
        <div>
            <h1>Pokemon</h1>
            <div className={classes.common}>
                <div className={classes.common__item}>
                    <img alt='picture' src={pokemonObject?.sprites?.front_default}></img>
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
            <div>

            </div>
        </div>
    );
};

export default PokemonDetails;
