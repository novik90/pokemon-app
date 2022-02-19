import { combineReducers } from "redux";
import { pokemonReduser } from "./pokemonReduser";

export const rootReducer = combineReducers({
    pokemon: pokemonReduser
})

export type RootState = ReturnType<typeof rootReducer>