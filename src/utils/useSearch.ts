import React, { useCallback, useEffect, useState } from "react";
import { SEARCH_REPOSITORIES } from "./query";
import { useQuery } from "@apollo/client";

function useSearch(searchQuery: string) {
	const [searchResult, setSearchResult] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

    console.log('-----Beggining userSearch-----');
    console.log(`searchQuery->${searchQuery}`);
    console.log(`error->${error}`);
    console.log(`error->${loading}`);

    console.log(`searchResult->${searchResult}`);

	useEffect(() => {
		let searchResult = {};
		if (searchQuery) {
			const { loading, error, data } = useQuery(SEARCH_REPOSITORIES, {
				variables: {
					query: searchQuery,
				},
			});

			/*if (data.search.nodes.length) {
			for (let index = 0; i < data.search.nodes.length; i++) {}
		}*/
			if (error) {
				setError(true);
			}

			if (loading) {
				setLoading(true);
			}

			if (data.search.node.length) {
				setSearchResult(data.search.node.length);
			}
		}
	}, [searchQuery]);

    console.log('-----Ending userSearch-----');

	return {
		searchResult,
		error,
		loading,
	};
}

export default useSearch;
