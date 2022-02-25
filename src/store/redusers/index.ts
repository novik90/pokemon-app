import { combineReducers } from "redux";
import { pokemonDetailsReducer } from "./pokemonDetailsReducer";
import { pokemonReducer } from "./pokemonReducer";
import { AbilityReducer } from "./pokemonAbilityReducer";

export const rootReducer = combineReducers({
    pokemon: pokemonReducer,
    pokemonDetails: pokemonDetailsReducer,
    abilities: AbilityReducer
})

export type RootState = ReturnType<typeof rootReducer>