"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import { Pokemon } from "../../types/types";
import styles from "../page.module.css";

interface PokemonCardProps {
	pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(`/pokemon/${pokemon.id}`);
	};
	return (
		<Card className={styles.card} sx={{ maxWidth: 300 }} onClick={handleClick}>
			<CardMedia
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					padding: "1rem",
				}}>
				<Image
					src={pokemon.sprites.front_default}
					alt={pokemon.name}
					width={200}
					height={200}
				/>
				<CardContent>
					<Typography variant="h5" component="div">
						Name: {pokemon.name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						ID: {pokemon.id}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Weight: {pokemon.weight}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Base Experience: {pokemon.base_experience}
					</Typography>
				</CardContent>
			</CardMedia>
		</Card>
	);
};

export default PokemonCard;
