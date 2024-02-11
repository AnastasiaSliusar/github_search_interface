import * as React from "react";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Icon, Typography } from "@mui/material";

const Welcome = () => {
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
				Welcome to GitHub Search Interface
			</Typography>
			<Typography variant="h4" align="center" gutterBottom>
				Please put GitHub repo name into Search field in order to find required repositories
			</Typography>
		</Box>
	);
};

export default Welcome;
