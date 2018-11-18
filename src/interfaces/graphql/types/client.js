import * as graphql from 'graphql';

import { nodeInterface } from './';
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
        first: { type: graphql.GraphQLInt }, // Forward pagination arguments
        after: { type: graphql.GraphQLString }, 
        last: { type: graphql.GraphQLInt },  // Backward pagination arguments
        before: { type: graphql.GraphQLString },
      },
      resolve: (client, { first, after, last, before }) => {
        return getClientProjectsByClient(client, { first, after, last, before });
      }
    },
  },
  interfaces: [nodeInterface],
});
