import { PokemonDetailsState, PokemonDetailsAction, PokemonDetailsActionTypes } from "../../types/pokemonDetails";

const NameUrl = {
    name: '',
    url: '',
}

const Front = {
    front_default: '',
}

const initPokemonDetails = {
    abilities: [],
    base_experience: 0,
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    id: 0,
    is_default: true,
    location_area_encounters: '',
    moves: [],
    name: '',
    order: 0,
    past_types: [],
    species: NameUrl,
    sprites: Front,
    stats: [],
    types: [],
    weight: 0,
};

const initialState: PokemonDetailsState = {
    data: initPokemonDetails,
    loading: false,
    error: null,
}

export const pokemonDetailsReducer = (state = initialState, action: PokemonDetailsAction): PokemonDetailsState => {
    switch (action.type) {
        case PokemonDetailsActionTypes.FETCH_POKEMON_DETAILS:
            return {loading: true, error: null, data: initPokemonDetails};
        case PokemonDetailsActionTypes.FETCH_POKEMON_DETAILS_SUCCESS:
            return {loading: false, error: null, data: action.payload};
        case PokemonDetailsActionTypes.FETCH_POKEMON_DETAILS_ERROR:
            return {loading: false, error: action.payload, data: initPokemonDetails}
        default:
            return state;
    }
}