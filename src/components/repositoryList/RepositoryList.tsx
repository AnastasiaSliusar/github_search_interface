import * as React from "react";
import Box from "@mui/material/Box";
import { RepositoryListProps } from "../../utils/type";
import RepoItem from "./RepoItem";

const RepositoryList = ({
	repos,
	favoriteRepos,
	updateFavorites,
}: RepositoryListProps) => {
	let reposList = repos.map((repo) => {
		let isFavorite = favoriteRepos[repo.id] ? true : false;
		return (
			<RepoItem
				repo={repo}
				key={repo.id}
				isFavorite={isFavorite}
				updateFavorites={updateFavorites}
			/>
		);
	});
	return <Box>{reposList}</Box>;
};

export default RepositoryList;
