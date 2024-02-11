import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import TabContent from "./components/TabContent";

function App() {
	const [activeTab, setActiveTab] = useState(0);
	const [isFavorite, setIsFavorite] = useState(false);
	const [searcResult, setSearchResult] = useState([]);
  const [favoriteItem, setFavoriteItem] = useState([]);
	function handleSearch() {}
  
	function handleChangeTab(newActiveTab: number) {
    setActiveTab(newActiveTab);
  }

	let content = !searcResult.length ? <Welcome /> : <></>;
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
