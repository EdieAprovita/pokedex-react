export interface NamedAPIResource {
	name: string;
	url: string;
}

export interface PokemonAbility {
	is_hidden: boolean;
	slot: number;
	ability: NamedAPIResource;
}

export interface VersionGameIndex {
	game_index: number;
	version: NamedAPIResource;
}

export interface PokemonHeldItem {
	item: NamedAPIResource;
	version_details: {
		version: NamedAPIResource;
		rarity: number;
	}[];
}

export interface PokemonMove {
	move: NamedAPIResource;
	version_group_details: {
		level_learned_at: number;
		version_group: NamedAPIResource;
		move_learn_method: NamedAPIResource;
	}[];
}

export interface PokemonSprites {
	front_default: string;
	other: {
		"official-artwork": {
			front_default: string;
		};
	};
}

export interface PokemonStat {
	base_stat: number;
	effort: number;
	stat: NamedAPIResource;
}

export interface PokemonType {
	slot: number;
	type: NamedAPIResource;
}

export interface Pokemon {
	id: number;
	name: string;
	base_experience: number;
	height: number;
	is_default: boolean;
	order: number;
	weight: number;
	abilities: PokemonAbility[];
	forms: NamedAPIResource[];
	game_indices: VersionGameIndex[];
	held_items: PokemonHeldItem[];
	location_area_encounters: string;
	moves: PokemonMove[];
	past_types: PokemonType[];
	sprites: PokemonSprites;
	species: NamedAPIResource;
	stats: PokemonStat[];
	types: PokemonType[];
}
