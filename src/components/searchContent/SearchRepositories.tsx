import { useQuery } from "@apollo/client";
import { SearchRepositoriesProps } from "../../utils/type";
import { SEARCH_REPOSITORIES } from "../../utils/query";
import RepositoryList from "../repositoryList/RepositoryList";
import Loading from "../common/Loading";
import ErrorBlock from "../common/ErrorBlock";


//clear to null
const SearchRepositories = ({ searchQuery, updateData, updateFavorites, favoriteRepos }: SearchRepositoriesProps) => {


	const { loading, error, data } = useQuery(SEARCH_REPOSITORIES, {
		variables: {
			query: searchQuery
		}
	});

	if (loading) {
		return <Loading />;
	} 
	if (error) {
		return <ErrorBlock error={error.message}/>
	}
	
	let repos = data.search.nodes;

	updateData(repos);

	return (
		<RepositoryList repos={repos} favoriteRepos={favoriteRepos} updateFavorites={updateFavorites}/>
	);
};

export default SearchRepositories;
