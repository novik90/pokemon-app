import {
    AbilityState,
    AbilityAction,
    AbilitiesActionTypes,
} from "../../types/pokemonAbility";

const initAbility = {
    flavor_text_entries: [],
};

const initState: AbilityState = {
    loading: false,
    data: initAbility,
};

export const AbilityReducer = (
    state = initState,
    action: AbilityAction
): AbilityState => {
    switch (action.type) {
        case AbilitiesActionTypes.FETCH_POKEMON_ABILITY:
            return { loading: true, data: action.payload };
        case AbilitiesActionTypes.FETCH_POKEMON_ABILITY_SUCCESS:
            return { loading: false, data: initAbility }
        default:
            return state;
    }
};
