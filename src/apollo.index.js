import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'https://swapi.graph.cool/',
});