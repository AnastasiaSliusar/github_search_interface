import { useQuery } from "@apollo/client";
import { SearchRepositoriesProps } from "../../utils/type";
import { SEARCH_REPOSITORIES } from "../../utils/query";
import RepositoryList from "../repositoryList/RepositoryList";
import mockupsData from "../../utils/mockups";


//clear to null
const SearchRepositories = ({ searchQuery, updateData, updateFavorites, favoriteRepos }: SearchRepositoriesProps) => {

	console.log(`SEARCH_REPOSITORIES-->${JSON.stringify(SEARCH_REPOSITORIES)}`);
	/*const { loading, error, data } = useQuery(SEARCH_REPOSITORIES, {
		variables: {
			query: searchQuery,
		},
	});


	console.log(`data-->${data}`);
	if(error) {
		return <div>Error</div>
	}
	if(loading) {
		return <div>Loading...</div>
	}
	if (data.search.node.length) {
		updateData(data.search.node.length);
	}*/
	const repos = mockupsData.data.search.nodes;

	updateData(repos);

	return (
		<RepositoryList repos={repos} favoriteRepos={favoriteRepos} updateFavorites={updateFavorites}/>
	);
};

export default SearchRepositories;
