import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Search from "./SearchInput";
import { NavigationProps } from "../../utils/type";
import TabWrapper from "./TabWrapper";
import SearchInput from "./SearchInput";

const Navigation = ({
	handleSearch,
	handleChangeTab,
	activeTab,
}: NavigationProps) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<TabWrapper
						handleChangeTab={handleChangeTab}
						activeTab={activeTab}
					/>
					<SearchInput handleSearch={handleSearch} />
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navigation;
