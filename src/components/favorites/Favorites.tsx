import * as React from "react";
import Box from "@mui/material/Box";
import RepoItem from "../repositoryList/RepoItem";
import { FavoritesPageProps } from "../../utils/type";
import EmptyView from "./EmptyView";
import Review from "../review/Review";

const Favorites = ({
	favorites,
	updateFavorites,
	updateReviews
}: FavoritesPageProps) => {
	let reposList = [];
	for(let index in favorites) {
		let repo = favorites[index];
		reposList.push(
		<RepoItem
			repo={repo}
			key={repo.id}
			isFavorite={repo.isFavorite}
			updateFavorites={updateFavorites}
		>
			<Review repo={repo} updateReviews={updateReviews}/>
		</RepoItem>
		)
	}

	const favoriteContent = reposList.length? reposList: <EmptyView />
	return <Box>{favoriteContent}</Box>;
};

export default Favorites;
