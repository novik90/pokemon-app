import axios from "axios";
import { Dispatch } from "react";
import { PokemonAction, PokemonActionTypes } from "../../types/pokemon";

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

export const fetchPokemonDetails = () => {
    return async (dispatch: Dispatch<PokemonAction>) => {
        try {

        } catch (e) {
            
        }
    }
}
