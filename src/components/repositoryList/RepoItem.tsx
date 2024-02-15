import React, { useState } from "react";
import { RepoItemProps, SearchResultProps } from "../../utils/type";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import {
	Card as MuiCard,
	CardContent,
	Typography,
	IconButton,
	Link,
	Box,
} from "@mui/material";


const RepoItem = ({ repo, isFavorite, updateFavorites, children }: RepoItemProps) => {


	const [isFav, setIsFav] = useState(isFavorite);
	const favoriteButton = isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />;
	const toggleFavorite = () => {
		setIsFav(!isFav);
		updateFavorites(repo, !isFav);
	};

	return (
		<MuiCard
			id={repo.id}
			sx={{
				marginBottom: "30px",
			}}
		>
			<CardContent sx={{ height: "80px" }}>
				<Box
					sx={{
						display: "inline-block",
						height: "inherit",
						width: '600px'
					}}
				>
					<Typography>
						Name: <Link href={repo.url}>{repo.name}</Link>
					</Typography>

					<Typography>
						Author: <Link href={repo.owner.url}>{repo.owner.login}</Link>
					</Typography>
					<Typography>Date: {repo.createdAt}</Typography>
				</Box>
				<Box
					sx={{
						display: "inline-block",
						height: "inherit",
						verticalAlign: "middle",
						marginLeft: "100px",
					}}
				>
					<IconButton size="large" onClick={toggleFavorite}>
						{favoriteButton}
					</IconButton>
				</Box>
			</CardContent>
			{children}
		</MuiCard>
	);
};

export default RepoItem;
