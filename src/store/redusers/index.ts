import { combineReducers } from "redux";
import { pokemonDetailsReducer } from "./pokemonDetailsReducer";
import { pokemonReducer } from "./pokemonReducer";
import { AbilityReducer } from "./pokemonAbilityReducer";
import { CompareReducer } from "./compareReducer";

export const rootReducer = combineReducers({
    pokemon: pokemonReducer,
    pokemonDetails: pokemonDetailsReducer,
    abilities: AbilityReducer,
    compare: CompareReducer
})

export type RootState = ReturnType<typeof rootReducer>