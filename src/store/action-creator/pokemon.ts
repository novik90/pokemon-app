import axios from "axios";
import { Dispatch } from "react";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { Pokemon } from "../../models/pokemon";
import { CompareAction, CompareActionTypes } from "../../types/comparePokemons";
import { PokemonAction, PokemonActionTypes } from "../../types/pokemon";
import { AbilitiesActionTypes, AbilityAction } from "../../types/pokemonAbility";
import { PokemonDetailsAction, PokemonDetailsActionTypes } from "../../types/pokemonDetails";

export const fetchPokemons = () => {
    return async (dispatch: Dispatch<PokemonAction>) => {
        try {
            dispatch({ type: PokemonActionTypes.FETCH_POKEMONS });

            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=-1")
            dispatch({
                type: PokemonActionTypes.FETCH_POKEMONS_SUCCESS,
                payload: response.data,
            });
        } catch (e) {
            dispatch({
                type: PokemonActionTypes.FETCH_POKEMONS_ERROR,
                payload: "Error fetch pokemon",
            });
        }
    };
};

export const fetchPokemonDetails = (name: string) => {
    return async (dispatch: Dispatch<PokemonDetailsAction>) => {
        try {
            dispatch({type: PokemonDetailsActionTypes.FETCH_POKEMON_DETAILS});

            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/"+name)
            dispatch({
                type: PokemonDetailsActionTypes.FETCH_POKEMON_DETAILS_SUCCESS,
                payload: response.data,
            });
        } catch (e) {
            dispatch({
                type: PokemonDetailsActionTypes.FETCH_POKEMON_DETAILS_ERROR,
                payload: `Pokemon ${name} not found!`
            })
        }
    }
}

export const fetchPokemonAbility = (url: string) => {
    return async (dispatch: Dispatch<AbilityAction>) => {
        try {
            const response = await axios.get(url);
            dispatch({type: AbilitiesActionTypes.FETCH_POKEMON_ABILITY, payload: response.data.flavor_text_entries[0].flavor_text});
        } catch (e) {
            console.log('hello error =(')
        }
    }
}

export const addPokemonToCompare = (pokemon: Pokemon) => {
    return async (dispatch: Dispatch<CompareAction>) => {
        try {
            dispatch({
                type: CompareActionTypes.ADD_POKEMON,
                payload: [pokemon]
            })
            console.log('add pokemon')
        } catch (e) {
            console.log('error')
        }
    }
}