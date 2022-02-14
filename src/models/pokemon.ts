class Sprites {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
    other: {};
    versions: {};

    constructor(
        back_default: string,
        back_female: null,
        back_shiny: string,
        back_shiny_female: null,
        front_default: string,
        front_female: null,
        front_shiny: string,
        front_shiny_female: null,
        other: {},
        versions: {},
    ) {
        this.back_default = back_default;
        this.back_female = back_female;
        this.back_shiny = back_shiny;
        this.back_shiny_female = back_shiny_female;
        this.front_default = front_default;
        this.front_female = front_female;
        this.front_shiny = front_shiny;
        this.front_shiny_female = front_shiny_female;
        this.other = other;
        this.versions = versions
    }
}

class Pokemon {
    abilities: [];
    base_experience: number;
    forms: [];
    game_indices: [];
    height: number;
    held_items: [];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    movies: [];
    name: string;
    order: number;
    past_types: [];
    species: {};
    sprites: Sprites;
    stats: [];
    types: [];
    weight: number;

    constructor(
        abilities: [],
        base_experience: number,
        forms: [],
        game_indices: [],
        height: number,
        held_items: [],
        id: number,
        is_default: boolean,
        location_area_encounters: string,
        movies: [],
        name: string,
        order: number,
        past_types: [],
        species: {},
        sprites: Sprites,
        stats: [],
        types: [],
        weight: number,
    ) {
        this.abilities = abilities,
        this.base_experience = base_experience,
        this.forms = forms,
        this.game_indices = game_indices, 
        this.height = height,
        this.held_items = held_items,
        this.id = id,
        this.is_default = is_default,
        this.location_area_encounters = location_area_encounters, 
        this.movies = movies,
        this.name = name,
        this.order = order,
        this.past_types = past_types,
        this.species = species,
        this.sprites = sprites,
        this.stats = stats,
        this.types = types,
        this.weight = weight
    }
}

export default Pokemon;