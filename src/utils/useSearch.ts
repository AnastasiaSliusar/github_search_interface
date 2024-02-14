import React, { useCallback, useEffect, useState } from "react";
import { SEARCH_REPOSITORIES } from "./query";
import { useQuery } from "@apollo/client";

function useSearch(searchQuery: string) {
	
	const [searchResult, setSearchResult] = useState([]);

	console.log("-----Beggining userSearch-----");
	console.log(`searchQuery->${searchQuery}`);

	console.log(`searchResult->${searchResult}`);

	const { loading, error, data } = useQuery(SEARCH_REPOSITORIES, {
		variables: {
			query: searchQuery,
		},
		skip: !searchQuery,
	});

	/*if (data.search.nodes.length) {
			for (let index = 0; i < data.search.nodes.length; i++) {}
		}*/
	console.log(`data-->${data}`);
	if (data.search.node.length) {
		setSearchResult(data.search.node.length);
	}

	
	console.log(`error->${error}`);
	console.log(`error->${loading}`);

	console.log("-----Ending userSearch-----");

	return {
		searchResult,
		error,
		loading,
	};
}

export default useSearch;
