import React, { useCallback, useState } from "react";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import TabContent from "./components/navigation/TabContent";
import { Box } from "@mui/material";
import { FavoritesListProps, FavoritesProps, SearchResultProps } from "./utils/type";
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
		setSearchQuery(query);
	};

	const handleChangeTab = (newActiveTab: number) => {
		setActiveTab(newActiveTab);
	};

	const updateData = (repos: SearchResultProps[]) => {
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

	const updateReviews = (repo: FavoritesProps, reviewCount: number) => {
		favoriteRepos[repo.id] = { ...repo, reviewCount };
		setFavorites(favoriteRepos);
	}

	return (
		<Box>
			<Navigation
				handleSearch={handleSearch}
				handleChangeTab={handleChangeTab}
				activeTab={activeTab}
			/>
			<Box>
				<TabContent activeTab={activeTab} contentId={0}>
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
					<Favorites favorites={favoriteRepos} updateFavorites={updateFavorites} updateReviews={updateReviews}/>
				</TabContent>
			</Box>
		</Box>
	);
}

export default App;
