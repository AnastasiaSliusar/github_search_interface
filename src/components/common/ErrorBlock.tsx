import * as React from "react";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Icon, Typography } from "@mui/material";

const ErrorBlock = ({error}: {error:string}) => {
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
					color="error"
				/>
			</Box>
			<Typography variant="h3" align="center" gutterBottom>
				{error}
			</Typography>
		</Box>
	);
};

export default ErrorBlock;
