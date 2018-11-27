import * as graphql from 'graphql';

import { addClientProjectToClient } from '../resolvers';

export const mutationType = new graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addClientProject: {
      type: require('../types/client_project').addClientProjectPayload,
      args: {
        clientID: { type: graphql.GraphQLNonNull(graphql.GraphQLID) },
        input:    { type: graphql.GraphQLNonNull(require('../types/client_project').addClientProjectInput) },
      },
      // resolver receive parameters: (client, args, context, info)
      resolve: (_, { clientID, input }) => addClientProjectToClient(clientID, input)
    },
  }
});
