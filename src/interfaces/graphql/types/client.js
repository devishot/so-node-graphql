import * as graphql from 'graphql';

import {
  connectionInterface,
  edgeInterface,
  pageInfo,
  nodeInterface
} from './';
import {clientProjectConnectionType} from './client_project';
import {getClientProjectsByClientID} from '../resolvers';

export const clientType = new graphql.GraphQLObjectType({
  name: 'Client',
  fields: {
    id: { type: graphql.GraphQLNonNull(graphql.GraphQLID) },
    timestamp: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
    firstName: { type: graphql.GraphQLString },
    lastName: { type: graphql.GraphQLString },
    companyName: { type: graphql.GraphQLString },
    projects: {
      type: graphql.GraphQLNonNull(clientProjectConnectionType),
      args: {
        first:  { type: graphql.GraphQLInt }, // Forward pagination arguments
        after:  { type: graphql.GraphQLString },
        last:   { type: graphql.GraphQLInt },  // Backward pagination arguments
        before: { type: graphql.GraphQLString },
      },
      // resolver receive parameters: (client, args, context, info)
      resolve: (client, argValues) => {
        return getClientProjectsByClientID(client, argValues);
      }
    },
  },
  interfaces: [nodeInterface],
});

export const clientEdgeType = new graphql.GraphQLObjectType({
  name: 'ClientEdge',
  fields: {
    cursor:   { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
    node:     { type: graphql.GraphQLNonNull(clientType) },
  },
  interfaces: [edgeInterface],
});

export const clientConnectionType = new graphql.GraphQLObjectType({
  name: 'ClientConnection',
  fields: {
    edges:    { type: graphql.GraphQLNonNull(new graphql.GraphQLList(clientEdgeType)) },
    pageInfo: { type: graphql.GraphQLNonNull(pageInfo) },
  },
  interfaces: [connectionInterface],
});

// Mutation input and output types
export const addClientInput = new graphql.GraphQLInputObjectType({
  name: 'AddClientInput',
  fields: {
    firstName: { type: graphql.GraphQLString },
    lastName: { type: graphql.GraphQLString },
    companyName: { type: graphql.GraphQLString },
  },
});

export const addClientPayload = new graphql.GraphQLObjectType({
  name: 'AddClientPayload',
  fields: {
    payloadEdge: { type: clientEdgeType },
  },
});