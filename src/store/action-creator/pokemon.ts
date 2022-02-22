import axios from "axios";
import { Dispatch } from "react";
import { PokemonAction, PokemonActionTypes } from "../../types/pokemon";
import { PokemonDetailsAction, PokemonDetailsActionTypes } from "../../types/pokemonDetails";

export const fetchPokemons = () => {
    return async (dispatch: Dispatch<PokemonAction>) => {
        try {
            dispatch({ type: PokemonActionTypes.FETCH_POKEMONS });

            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=-1")
            dispatch({
                type: PokemonActionTypes.FETCH_POKEMONS_SUCCESS,
                payload: response.data,
            });
        } catch (e) {
            dispatch({
                type: PokemonActionTypes.FETCH_POKEMONS_ERROR,
                payload: "Error fetch pokemon",
            });
        }
    };
};

export const fetchPokemonDetails = (name: string) => {
    return async (dispatch: Dispatch<PokemonDetailsAction>) => {
        try {
            dispatch({type: PokemonDetailsActionTypes.FETCH_POKEMON_DETAILS});

            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/"+name)
            dispatch({
                type: PokemonDetailsActionTypes.FETCH_POKEMON_DETAILS_SUCCESS,
                payload: response.data,
            });
        } catch (e) {
            dispatch({
                type: PokemonDetailsActionTypes.FETCH_POKEMON_DETAILS_ERROR,
                payload: "Erropr fetch Pokemon Details"
            })
        }
    }
}
