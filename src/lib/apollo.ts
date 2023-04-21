import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const { VITE_BACKEND_BASE_URL, VITE_GITHUB_ACCESS_TOKEN } = import.meta.env;

const httpLink = createHttpLink({
  uri: VITE_BACKEND_BASE_URL,
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: `Bearer ${VITE_GITHUB_ACCESS_TOKEN}`,
  },
}));

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
