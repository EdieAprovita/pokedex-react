import axios from "axios";
import { Pokemon } from "../../types/types";

const BASE_URL = "https://pokeapi.co/api/v2/";

export const api = axios.create({
	baseURL: BASE_URL,
});

export const getPokemon = async (idOrName: string | number): Promise<Pokemon> => {
	const { data } = await api.get<Pokemon>(`pokemon/${idOrName}`);
	return data;
};
