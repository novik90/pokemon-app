import { Pokemon } from "../models/pokemon";

export interface PokemonDetailsState {
    data: Pokemon;
    loading: boolean;
    error: null | string;
}

export enum PokemonDetailsActionTypes {
    FETCH_POKEMON_DETAILS = "FETCH_POKEMON_DETAILS",
    FETCH_POKEMON_DETAILS_SUCCESS = "FETCH_POKEMON_DETAILS_SUCCESS",
    FETCH_POKEMON_DETAILS_ERROR = "FETCH_POKEMON_DETAILS_ERROR"
}

interface FetchPokemonDetailsAction {
    type: PokemonDetailsActionTypes.FETCH_POKEMON_DETAILS;
}

interface FetchPokemonDetailsSuccessAction {
    type: PokemonDetailsActionTypes.FETCH_POKEMON_DETAILS_SUCCESS;
    payload: Pokemon;
}

interface FetchPokemonDetailsErrorAction {
    type: PokemonDetailsActionTypes.FETCH_POKEMON_DETAILS_ERROR;
    payload: string;
}

export type PokemonDetailsAction = FetchPokemonDetailsAction | FetchPokemonDetailsSuccessAction | FetchPokemonDetailsErrorAction;