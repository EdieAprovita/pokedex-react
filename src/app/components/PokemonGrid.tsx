"use client";

import React, { useEffect, useState } from "react";
import { Grid, Container } from "@mui/material";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "../../types/types";
import { getPokemon } from "../api/api";

const PokemonGrid: React.FC = () => {
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);

	useEffect(() => {
		const fetchPokemons = async () => {
			const promises = Array.from({ length: 35 }, (_, index) =>
				getPokemon(index + 1)
			);
			const results = await Promise.all(promises);
			setPokemons(results);
		};
		fetchPokemons();
	}, []);

	return (
		<Container sx={{ mt: 5 }}>
			<Grid container spacing={3}>
				{pokemons.map(pokemon => (
					<Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.id}>
						<PokemonCard pokemon={pokemon} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default PokemonGrid;
