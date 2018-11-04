import * as graphql from 'graphql';

import { getClientByID } from '../resolvers';

export const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    client: {
      type: require('../types/client').clientType,
      args: {
        id: { type: graphql.GraphQLNonNull(graphql.GraphQLID) }
      },
      // resolver receive parameters: (client, args, context, info)
      resolve: (_, { id }) => getClientByID(id)
    },
  }
});
