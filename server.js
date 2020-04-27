import fetch from 'node-fetch';
import {
  introspectSchema, makeRemoteExecutableSchema, mergeSchemas,
} from 'graphql-tools';
import { HttpLink } from 'apollo-link-http';
import { ApolloServer } from 'apollo-server';

const avatarStub = 'https://starwars-visualguide.com/assets/img/characters/2.jpg';


const getRemoteSchema = () => {
  const link = new HttpLink({
    uri: 'https://swapi.graph.cool/',
    fetch,
  });

  return introspectSchema(link)
    .then((schema) => makeRemoteExecutableSchema({
      schema,
      link,
    }));
};


const createSchema = () => {
  const typeDefs = `
    extend type Person {
      avatar: String
    }
  `;

  const resolvers = {
    Person: {
      avatar: () => avatarStub,
    },
  };


  return (
    getRemoteSchema()
      .then((remoteExecutableSchema) => mergeSchemas({
        schemas: [
          remoteExecutableSchema,
          typeDefs,
        ],
        resolvers,
      }))
  );
};

/* eslint-disable no-console */
const runServer = () => createSchema()
  .then((schema) => {
    const server = new ApolloServer({
      schema,
      context: {
      },
    });
    return server.listen();
  })
  .then(({ url }) => console.log(`Running server at ${url}`));


runServer();
