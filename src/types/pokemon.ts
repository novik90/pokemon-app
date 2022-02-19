import { Pokemons } from "../models/pokemon";

export interface PokemonState {
    data: Pokemons;
    loading: boolean;
    error: null | string;
}

export enum PokemonActionTypes {
    FETCH_POKEMONS = "FETCH_POKEMONS",
    FETCH_POKEMONS_SUCCESS = "FETCH_POKEMONS_SUCCESS",
    FETCH_POKEMONS_ERROR = "FETCH_POKEMONS_ERROR"
}

interface FetchPokemonAction {
    type: PokemonActionTypes.FETCH_POKEMONS;
}

interface FetchPokemonSuccessAction {
    type: PokemonActionTypes.FETCH_POKEMONS_SUCCESS;
    payload: Pokemons;
}

interface FetchPokemonErrorAction {
    type: PokemonActionTypes.FETCH_POKEMONS_ERROR;
    payload: string;
}

export type PokemonAction = FetchPokemonAction | FetchPokemonSuccessAction | FetchPokemonErrorAction;