"use client";

import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const Search: React.FC<{ onSearch: (term: string) => void }> = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setSearchTerm(value);
		onSearch(value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSearch(searchTerm);
	};

	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				gap: 1,
				mb: 2,
				mt: 2,
				width: "100%",
				maxWidth: "600px",
				margin: "0 auto",
			}}>
			<TextField
				label="Search Pokemon"
				variant="outlined"
				value={searchTerm}
				onChange={handleSearch}
				sx={{ flex: 1, backgroundColor: "white" }}
			/>
			<Button
				type="submit"
				variant="contained"
				color="primary"
				sx={{ boxShadow: "none" }}>
				Search
			</Button>
		</Box>
	);
};

export default Search;
