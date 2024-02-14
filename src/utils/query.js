import { gql } from "@apollo/client";
//"github_search_interface in:name"
export const SEARCH_REPOSITORIES = gql`
  query SearchRepositories($query: String!) {
    search(query: $query, type: REPOSITORY, first: 20) {
      nodes {
        ... on Repository {
          description
          id
          name
          createdAt
          isPrivate
          url
          owner {
            login
            avatarUrl
            id
            url
          }
        }
      }
    }  
  }
`;