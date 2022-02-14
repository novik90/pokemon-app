import { FC } from "react";
import PokemonUrl from "../models/pokemonUrl";
import PokemonItem from "./PokemonItem";

const Home: FC<{ pokemon: PokemonUrl[] }> = (props) => {
    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                {props.pokemon.map((i) => (
                    <PokemonItem pokemon={i} key={i.name}>
                        <p>{i.name}</p>
                    </PokemonItem>
                ))}
            </ul>
        </div>
    );
};

export default Home;
