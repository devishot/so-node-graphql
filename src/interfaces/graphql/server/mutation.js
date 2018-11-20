import * as graphql from 'graphql';

import { addClientProjectToClient } from '../resolvers';

export const mutationType = new graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addProject: {
      type: require('../types/client_project').clientProjectType,
      args: {
        clientID: { type: graphql.GraphQLNonNull(graphql.GraphQLID) },
        input:    { type: require('../types/client_project').clientProjectInput },
      },
      // resolver receive parameters: (client, args, context, info)
      resolve: (_, { clientID, input }) => addClientProjectToClient(clientID, input)
    },
  }
});
