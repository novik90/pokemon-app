interface AbilityDescription {
    flavor_text: string;
}

interface Ability {
    flavor_text_entries: AbilityDescription[];
}

export interface AbilityState {
    data: Ability;
    loading: boolean
}

export enum AbilitiesActionTypes {
    FETCH_POKEMON_ABILITY = "FETCH_POKEMON_ABILITY",
    FETCH_POKEMON_ABILITY_SUCCESS = "FETCH_POKEMON_ABILITY_SUCCESS"
}

interface FetchPokemonAbilityAction {
    type: AbilitiesActionTypes.FETCH_POKEMON_ABILITY;
    payload: Ability;
}

interface FetchPokemonAbilitySuccessAction {
    type: AbilitiesActionTypes.FETCH_POKEMON_ABILITY_SUCCESS
}

export type AbilityAction = FetchPokemonAbilityAction | FetchPokemonAbilitySuccessAction;
