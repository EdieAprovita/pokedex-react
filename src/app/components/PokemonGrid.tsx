"use client";

import React, { useEffect, useState } from "react";
import { Grid, Container, Typography } from "@mui/material";
import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";
import { Pokemon } from "../../types/types";
import { getPokemon } from "../api/api";
import Search from "./Search";

const ITEMS_PER_PAGE = 20;

const PokemonGrid: React.FC = () => {
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);
	const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		const fetchPokemons = async () => {
			const promises = Array.from({ length: 500 }, (_, index) =>
				getPokemon(index + 1)
			);
			const results = await Promise.all(promises);
			setPokemons(results);
			setFilteredPokemons(results);
		};
		fetchPokemons();
	}, []);

	const handleSearch = (term: string) => {
		if (term === "") {
			setFilteredPokemons(pokemons);
		} else {
			const filtered = pokemons.filter(pokemon =>
				pokemon.name.includes(term.toLowerCase())
			);
			setFilteredPokemons(filtered);
		}
		setPage(1);
	};

	const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	const paginatedPokemons = filteredPokemons.slice(
		(page - 1) * ITEMS_PER_PAGE,
		page * ITEMS_PER_PAGE
	);

	return (
		<Container sx={{ mt: 5 }}>
			<Search onSearch={handleSearch} />
			<Typography
				variant="h5"
				component="div"
				sx={{ textAlign: "center", mt: 2, mb: 2 }}>
				Pokemons
			</Typography>
			<Grid container spacing={3}>
				{paginatedPokemons.map(pokemon => (
					<Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.id}>
						<PokemonCard pokemon={pokemon} />
					</Grid>
				))}
			</Grid>
			<Pagination
				count={Math.ceil(filteredPokemons.length / ITEMS_PER_PAGE)}
				page={page}
				onPageChange={handlePageChange}
			/>
		</Container>
	);
};

export default PokemonGrid;
