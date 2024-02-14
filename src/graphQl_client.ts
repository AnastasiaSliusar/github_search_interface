import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});


const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer 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`,
  },
});

export default client;