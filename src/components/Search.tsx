import React, { useCallback } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { SearchProps } from "../utils/type";
import lodash from "lodash";
import { timeout } from "../utils/data";

const SearchWrapper = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(3),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "450px",
		},
	},
}));

const Search = ({ handleSearch }: SearchProps) => {

	const debouncedHandleSearch = useCallback(lodash.debounce(handleSearch, timeout), []);

	let onChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
		debouncedHandleSearch(event.target.value);
	}
	
	return (
		<SearchWrapper>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				placeholder="Search github repository"
				inputProps={{ "aria-label": "search" }}
				onChange={onChange}
			/>
		</SearchWrapper>
	);
};

export default Search;
