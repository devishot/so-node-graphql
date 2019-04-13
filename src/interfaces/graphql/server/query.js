import * as graphql from 'graphql';

import {
  getClientByID, 
  getClientProjectByID,
  getClientConnection,
} from '../resolvers';

export const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    clients: {
      type: require('../types/client').clientConnectionType,
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
      type: require('../types/client').clientType,
      args: {
        id: { type: graphql.GraphQLNonNull(graphql.GraphQLID) }
      },
      // resolver receive parameters: (client, args, context, info)
      resolve: (_, { id }) => getClientByID(id)
    },
    project: {
      type: require('../types/client_project').clientProjectType,
      args: {
        id: { type: graphql.GraphQLNonNull(graphql.GraphQLID) }
      },
      resolve: (_, { id }) => getClientProjectByID(id)
    }
  }
});
