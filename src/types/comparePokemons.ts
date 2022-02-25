import { Pokemon } from "../models/pokemon";

export interface CompareState {
    data: Pokemon[],
}

export enum CompareActionTypes {
    ADD_POKEMON = "ADD_POKEMON"
}

interface AddPokemonAction {
    type: CompareActionTypes.ADD_POKEMON;
    payload: Pokemon[]
}

export type CompareAction = AddPokemonAction;