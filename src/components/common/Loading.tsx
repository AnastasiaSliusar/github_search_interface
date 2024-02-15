import * as React from "react";
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';
import GitHubIcon from "@mui/icons-material/GitHub";
import { Typography } from "@mui/material";

const Loading = () => {
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
		<Box sx={{
				textAlign: 'center'
			}}>
			<CircularProgress/>
			<Typography variant="h5">Loading...</Typography>
		</Box>
		</Box>
	);
};

export default Loading;
