import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabPros } from "../../utils/type";
import { navigation } from "../../utils/data";
import { styled, alpha } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";

const TabStyled = styled(Tab)(({ theme }) => ({
	color: theme.palette.common.white,
	"&:hover": {
		color: alpha(theme.palette.common.black, 0.25),
	},
	"&.Mui-selected": {
		color: theme.palette.common.black,
	},
}));

const TabsStyled = styled(Tabs)(({ theme }) => ({
	"& .MuiTabs-indicator": {
		color: theme.palette.common.black,
	},
}));

const TabWrapper = ({ handleChangeTab, activeTab }: TabPros) => {
	function onChange(event: React.SyntheticEvent, newActiveTab: number){
		handleChangeTab(newActiveTab);
	}

	const tabs = navigation.map((item, index) => {
		return (
			<TabStyled
				label={item}
				id={`tab-${index}`}
				key={index}
				aria-controls={`navItem-${item}`}
				icon={item === "Favorite" ? <FavoriteIcon /> : undefined}
				iconPosition="start"
			/>
		);
	});

	return (
		<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
			<TabsStyled value={activeTab} onChange={onChange}>
				{tabs}
			</TabsStyled>
		</Box>
	);
};

export default TabWrapper;
