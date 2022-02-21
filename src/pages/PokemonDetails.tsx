import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PokemonDetails.css";
import { Pokemon } from "../models/pokemon";

const PokemonDetails = () => {
    const [pokemonObject, setPokemonObject] = useState<Pokemon>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const params = useParams();

    const fetchPokemons = async () => {
        const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon/" + params.name
        );
        if (response.ok) {
            response
                .json()
                .then((data) => {
                    setPokemonObject(data);
                })
        } else {
            //Выводить ошибку
            console.log("Ошибка");
        }
        setIsLoading(false);
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
            {isLoading && <p>loading...</p>}
            {!isLoading && (
                <>
                    <div>
                        <div>
                            <img
                                alt={pokemonObject?.name}
                                src={pokemonObject?.sprites?.front_default}
                            ></img>
                        </div>
                        <div>
                            <p>Height</p>
                            <span>{pokemonObject?.height}</span>
                        </div>
                        <div>
                            <p>Weight</p>
                            <span>{pokemonObject?.weight}</span>
                        </div>
                    </div>
                    <div>
                        <h3>Stats</h3>
                        <div>
                            <ul>
                                {pokemonObject?.stats.map((i, index) => (
                                    <li key={index}>
                                        {i.stat.name} - {i.base_stat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3>Types</h3>
                        <div className="types">
                            {pokemonObject?.types.map((i, index) => (
                                <span
                                    className={`type-${i.type.name}`}
                                    key={index}
                                >
                                    {i.type.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default PokemonDetails;
