import { Box } from "@mui/material";
import { TabContentProps } from "../utils/type";

const TabContent = ({ activeTab, contentId, children }: TabContentProps) => {
	return (
		<Box hidden={activeTab !== contentId} id={`content-${contentId}`}>
			{activeTab === contentId && children}
		</Box>
	);
};

export default TabContent;