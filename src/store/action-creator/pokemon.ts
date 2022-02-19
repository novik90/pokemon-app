import axios from "axios";
import { url } from "inspector";
import { Dispatch } from "react";
import { PokemonAction, PokemonActionTypes } from "../../types/pokemon";

export const fetchPokemons = (url?: string) => {
    return async (dispatch: Dispatch<PokemonAction>) => {
        try {
            dispatch({ type: PokemonActionTypes.FETCH_POKEMONS });

            const response = await axios.get(url ? url : "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10")
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
