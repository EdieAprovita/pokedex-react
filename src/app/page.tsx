import { Container, Typography, AppBar, Toolbar } from "@mui/material";
import PokemonGrid from "./components/PokemonGrid";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.background}>
			<AppBar
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
				position="static">
				<Toolbar>
					<Typography variant="h3">Pokedex</Typography>
				</Toolbar>
			</AppBar>
			<main className={styles.main}>
				<Container sx={{ mt: 5 }}>
					<Typography
						variant="h4"
						component="h1"
						className={styles.title}
						sx={{
							mt: 4,
						}}>
						Pokemons
					</Typography>
					<PokemonGrid />
				</Container>
			</main>
		</div>
	);
}
