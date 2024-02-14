import React, { useCallback, useState } from "react";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import TabContent from "./components/navigation/TabContent";
import { Box } from "@mui/material";
import { FavoritesListProps, SearchResultProps } from "./utils/type";
import Welcome from "./components/searchContent/Welcome";
import SearchRepositories from "./components/searchContent/SearchRepositories";
import Favorites from "./components/favorites/Favorites";

function App() {
	const [activeTab, setActiveTab] = useState(0);
	const [searchQuery, setSearchQuery] = useState("");
	const [favoriteRepos, setFavorites] = useState<FavoritesListProps>({});
	const [searchResult, setSearchResult] = useState<SearchResultProps[]>([]);

	const handleSearch = (search: string) => {
		let query = "";
		if (search) {
			query = `${search} in:name`;
		}
		console.log(`query-->${query}`);
		setSearchQuery(query);
	};

	const handleChangeTab = (newActiveTab: number) => {
		setActiveTab(newActiveTab);
	};

	const updateData = (repos: SearchResultProps[]) => {
		console.log(`data-->${repos}`);
		setSearchResult(repos);
	};

	const updateFavorites = (repo: SearchResultProps, isFavorite: boolean) => {
		if (isFavorite) {
			if (!favoriteRepos[repo.id]) {
				favoriteRepos[repo.id] = { ...repo, isFavorite, reviewCount: 0 };
				setFavorites(favoriteRepos);
			}
		} else {
			if (favoriteRepos[repo.id]) {
				let tmpFavorites = { ...favoriteRepos };
				delete tmpFavorites[repo.id];
				setFavorites(tmpFavorites);
			}
		}
	};

	console.log(`favoriteRepos-->${JSON.stringify(favoriteRepos)}`);
	return (
		<Box>
			<Navigation
				handleSearch={handleSearch}
				handleChangeTab={handleChangeTab}
				activeTab={activeTab}
			/>
			<Box>
				<TabContent activeTab={activeTab} contentId={0}>
					{(!searchResult.length || !searchQuery) && <Welcome />}
					{searchQuery && (
						<SearchRepositories
							searchQuery={searchQuery}
							updateData={updateData}
							updateFavorites={updateFavorites}
							favoriteRepos={favoriteRepos}
						/>
					)}
				</TabContent>
				<TabContent activeTab={activeTab} contentId={1}>
					<Favorites favorites={favoriteRepos} updateFavorites={updateFavorites}/>
				</TabContent>
			</Box>
		</Box>
	);
}

export default App;
