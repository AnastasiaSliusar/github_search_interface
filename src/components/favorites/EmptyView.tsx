import * as React from "react";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Typography } from "@mui/material";

const EmptyView = () => {

	return (
		<Box>
			<Box
				sx={{ marginTop: "50px", marginBottom: "50px", textAlign: "center" }}
			>
				<GitHubIcon
					sx={{
						width: "100px",
						height: "100px",
					}}
				/>
			</Box>
			<Typography variant="h3" align="center" gutterBottom>
				There is no any favorite repository
			</Typography>
			<Typography variant="h4" align="center" gutterBottom>
				Please add your favorite repository from search result
			</Typography>
		</Box>
	);
};

export default EmptyView;
