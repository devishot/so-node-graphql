import * as graphql from 'graphql';

import { connectionInterface, edgeInterface, pageInfo, nodeInterface } from './';
import { getClientProjectsByClient } from '../resolvers';

export const clientType = new graphql.GraphQLObjectType({
  name: 'Client',
  fields: {
    id: { type: graphql.GraphQLNonNull(graphql.GraphQLID) },
    timestamp: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
    firstName: { type: graphql.GraphQLString },
    lastName: { type: graphql.GraphQLString },
    companyName: { type: graphql.GraphQLString },
    projects: {
      type: graphql.GraphQLNonNull(require('./client_project').clientProjectConnectionType),
      args: {
        first:  { type: graphql.GraphQLInt }, // Forward pagination arguments
        after:  { type: graphql.GraphQLString }, 
        last:   { type: graphql.GraphQLInt },  // Backward pagination arguments
        before: { type: graphql.GraphQLString },
      },
      resolve: (client, argValues) => {
        return getClientProjectsByClient(client, argValues);
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