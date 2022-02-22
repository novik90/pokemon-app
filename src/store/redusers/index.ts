import { combineReducers } from "redux";
import { pokemonDetailsReducer } from "./pokemonDetailsReducer";
import { pokemonReduser } from "./pokemonReduser";

export const rootReducer = combineReducers({
    pokemon: pokemonReduser,
    pokemonDetails: pokemonDetailsReducer
})

export type RootState = ReturnType<typeof rootReducer>