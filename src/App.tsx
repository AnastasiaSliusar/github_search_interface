import React, { useCallback, useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import TabContent from "./components/TabContent";
import { useQuery } from "@apollo/client";
import { SEARCH_REPOSITORIES } from "./utils/query";
import useSearch from "./utils/useSearch";

function App() {
	const [activeTab, setActiveTab] = useState(0);
	const [isFavorite, setIsFavorite] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const [favoriteItem, setFavoriteItem] = useState([]);
	const {searchResult, error, loading }= useSearch(searchQuery);
	

	function handleSearch(search: string) {
		let query = `${search} in:name`;
		console.log(`query-->${query}`);
		setSearchQuery(query);
	}

	function handleChangeTab(newActiveTab: number) {
		setActiveTab(newActiveTab);
	}

	let content = !searchResult.length ? <Welcome /> : <></>;
	return (
		<>
			<Navigation
				handleSearch={handleSearch}
				handleChangeTab={handleChangeTab}
				activeTab={activeTab}
				isFavorite={isFavorite}
			/>

			<TabContent activeTab={activeTab} contentId={0}>
				{content}
			</TabContent>
			<TabContent activeTab={activeTab} contentId={1}>
				<div></div>
			</TabContent>
		</>
	);
}

export default App;
