import { CompareAction, CompareState, CompareActionTypes } from "../../types/comparePokemons";
import { Pokemon } from "../../models/pokemon";

const initState = {
    data: []
}

export const CompareReducer = (state = initState, action: CompareAction): CompareState => {
    switch (action.type) {
        case CompareActionTypes.ADD_POKEMON:
            return {...state, data: action.payload}
        default:
            return initState
    }
}