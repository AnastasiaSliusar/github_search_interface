import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Search from "./Search";
import { NavigationProps } from "../utils/type";
import TabWrapper from "./TabWrapper";

const Navigation = ({
	handleSearch,
	handleChangeTab,
	activeTab,
	isFavorite = false,
}: NavigationProps) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<TabWrapper
						handleChangeTab={handleChangeTab}
						activeTab={activeTab}
						isFavorite={isFavorite}
					/>
					<Search handleSearch={handleSearch} />
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navigation;
