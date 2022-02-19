export interface Pokemon {
    abilities: Ability[];
    base_experience: number;
    forms: NameUrl[];
    game_indices: GameIndice[];
    height: number;
    held_items: HeldItem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_types: any[];
    species: NameUrl;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
}

export interface PokemonUrl {
    name: string,
    url: string,
}

export interface Pokemons {
    count: number,
    next: string | null,
    previous: string | null;
    results: PokemonUrl[];
}

interface NameUrl {
    name: string;
    url: string;
}

interface Ability {
    ability: NameUrl;
    is_hidden: boolean;
    slot: number;
}

interface GameIndice {
    game_index: number;
    version: NameUrl;
}

interface VersionDetail {
    rarity: number;
    version: NameUrl;
}

interface HeldItem {
    item: NameUrl;
    version_details: VersionDetail[];
}

interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: NameUrl;
    version_group: NameUrl;
}

interface Move {
    move: NameUrl;
    version_group_details: VersionGroupDetail[];
}

interface DreamWorld {
    front_default: string;
    front_female?: any;
}

interface Front {
    front_default: string;
    front_female?: any;
    front_shiny: string;
    front_shiny_female?: any;
}

interface OfficialArtwork {
    front_default: string;
}

interface Other {
    dream_world: DreamWorld;
    home: Front;
    "official-artwork": OfficialArtwork;
}

interface RedBlue {
    back_default: string;
    back_gray: string;
    back_transparent: string;
    front_default: string;
    front_gray: string;
    front_transparent: string;
}

interface Yellow {
    back_default: string;
    back_gray: string;
    back_transparent: string;
    front_default: string;
    front_gray: string;
    front_transparent: string;
}

interface GenerationI {
    "red-blue": RedBlue;
    yellow: Yellow;
}

interface Crystal {
    back_default: string;
    back_shiny: string;
    back_shiny_transparent: string;
    back_transparent: string;
    front_default: string;
    front_shiny: string;
    front_shiny_transparent: string;
    front_transparent: string;
}

interface Gold {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    front_transparent: string;
}

interface Silver {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    front_transparent: string;
}

interface GenerationIi {
    crystal: Crystal;
    gold: Gold;
    silver: Silver;
}

interface Emerald {
    front_default: string;
    front_shiny: string;
}

interface FireredLeafgreen {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

interface RubySapphire {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

interface GenerationIii {
    emerald: Emerald;
    "firered-leafgreen": FireredLeafgreen;
    "ruby-sapphire": RubySapphire;
}

interface BackFront extends Front {
    back_default: string;
    back_female?: any;
    back_shiny: string;
    back_shiny_female?: any;
}

interface GenerationIv {
    "diamond-pearl": BackFront;
    "heartgold-soulsilver": BackFront;
    platinum: BackFront;
}

interface BackFrontAnimated extends BackFront {
    animated: BackFront;
}

interface GenerationV {
    "black-white": BackFrontAnimated;
}

interface GenerationVi {
    "omegaruby-alphasapphire": Front;
    "x-y": Front;
}

interface Icons {
    front_default: string;
    front_female?: any;
}

interface GenerationVii {
    icons: Icons;
    "ultra-sun-ultra-moon": Front;
}

interface Icons2 {
    front_default: string;
    front_female?: any;
}

interface GenerationViii {
    icons: Icons2;
}

interface Versions {
    "generation-i": GenerationI;
    "generation-ii": GenerationIi;
    "generation-iii": GenerationIii;
    "generation-iv": GenerationIv;
    "generation-v": GenerationV;
    "generation-vi": GenerationVi;
    "generation-vii": GenerationVii;
    "generation-viii": GenerationViii;
}

interface Sprites extends BackFront {
    other: Other;
    versions: Versions;
}

interface Stat {
    base_stat: number;
    effort: number;
    stat: NameUrl;
}

interface Type {
    slot: number;
    type: NameUrl;
}