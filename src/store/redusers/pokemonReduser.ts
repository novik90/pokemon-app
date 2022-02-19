import { PokemonState, PokemonAction, PokemonActionTypes } from "../../types/pokemon";
import { Pokemons } from "../../models/pokemon";

const initialState: PokemonState = {
    data: {count: 0, next: null, previous: null, results: []},
    loading: false,
    error: null
};

export const pokemonReduser = (state = initialState, action: PokemonAction): PokemonState => {
    switch (action.type) {
        case PokemonActionTypes.FETCH_POKEMONS:
            return { loading: true, error: null, data: {count: 0, next: null, previous: null, results: []} };
        case PokemonActionTypes.FETCH_POKEMONS_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case PokemonActionTypes.FETCH_POKEMONS_ERROR:
            return { loading: false, error: action.payload, data: {count: 0, next: null, previous: null, results: []} };
        default:
            return state
    }
};
