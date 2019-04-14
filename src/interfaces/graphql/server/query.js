import * as graphql from 'graphql';

import {
  getClientByID,
  getClientProjectByID,
  getClientConnection,
} from '../resolvers';
import {
  clientType,
  clientConnectionType,
  clientProjectType
} from '../types';

export const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    clients: {
      type: clientConnectionType,
      args: {
        first:  { type: graphql.GraphQLInt }, // Forward pagination arguments
        after:  { type: graphql.GraphQLString },
        last:   { type: graphql.GraphQLInt },  // Backward pagination arguments
        before: { type: graphql.GraphQLString },
      },
      resolve: (_, argValues) => {
        return getClientConnection(argValues);
      }
    },
    client: {
      type: clientType,
      args: {
        id: { type: graphql.GraphQLNonNull(graphql.GraphQLID) }
      },
      // resolver receive parameters: (client, args, context, info)
      resolve: (_, { id }) => getClientByID(id)
    },
    project: {
      type: clientProjectType,
      args: {
        id: { type: graphql.GraphQLNonNull(graphql.GraphQLID) }
      },
      resolve: (_, { id }) => getClientProjectByID(id)
    }
  }
});
