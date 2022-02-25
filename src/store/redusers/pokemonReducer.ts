import { PokemonState, PokemonAction, PokemonActionTypes } from "../../types/pokemon";

const initPokemon = {count: 0, next: null, previous: null, results: []}

const initialState: PokemonState = {
    data: initPokemon,
    loading: false,
    error: null
};

export const pokemonReducer = (state = initialState, action: PokemonAction): PokemonState => {
    switch (action.type) {
        case PokemonActionTypes.FETCH_POKEMONS:
            return { loading: true, error: null, data: initPokemon };
        case PokemonActionTypes.FETCH_POKEMONS_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case PokemonActionTypes.FETCH_POKEMONS_ERROR:
            return { loading: false, error: action.payload, data: initPokemon };
        default:
            return state
    }
};
