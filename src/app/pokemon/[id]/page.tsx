import {
	Container,
	Typography,
	Card,
	CardContent,
	CardMedia,
	Button,
	AppBar,
	Toolbar,
} from "@mui/material";
import Image from "next/image";
import { getPokemon } from "../../api/api";
import Link from "next/link";

interface PokemonPageProps {
	params: {
		id: string;
	};
}

const PokemonPage = async ({ params }: PokemonPageProps) => {
	const pokemon = await getPokemon(Number(params.id));

	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6">Pokemon Details</Typography>
				</Toolbar>
			</AppBar>
			<Container sx={{ mt: 5 }}>
				<Card sx={{ maxWidth: 600, margin: "auto", boxShadow: 3 }}>
					<CardMedia
						sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
						<Image
							src={pokemon.sprites.front_default}
							alt={pokemon.name}
							width={200}
							height={200}
						/>
					</CardMedia>
					<CardContent>
						<Typography
							variant="h5"
							component="div"
							sx={{
								textAlign: "center",
								fontWeight: "bold",
								textTransform: "capitalize",
							}}>
							{pokemon.name}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{ textAlign: "center", mt: 1 }}>
							ID: {pokemon.id}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{ textAlign: "center", mt: 1 }}>
							Weight: {pokemon.weight}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{ textAlign: "center", mt: 1 }}>
							Base Experience: {pokemon.base_experience}
						</Typography>
					</CardContent>
				</Card>
				<div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
					<Link href="/" passHref>
						<Button variant="contained" color="primary">
							Back to Pokedex
						</Button>
					</Link>
				</div>
			</Container>
		</div>
	);
};

export default PokemonPage;
