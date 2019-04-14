import * as graphql from 'graphql';

import {
  addClient,
  deleteClientByID,
  addClientProjectToClient,
  deleteClientProjectByID
} from '../resolvers';
import {
  clientProjectType,
  addClientProjectInput,
  addClientProjectPayload
} from '../types/client_project';
import {
  clientType,
  addClientInput,
  addClientPayload
} from '../types/client';

export const mutationType = new graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addClient: {
      type: addClientPayload,
      args: {
        input: {type: graphql.GraphQLNonNull(addClientInput)},
      },
      // resolver receive parameters: (client, args, context, info)
      resolve: (_, {input}) => addClient(input)
    },
    deleteClient: {
      type: clientType,
      args: {
        id: { type: graphql.GraphQLNonNull(graphql.GraphQLID) }
      },
      resolve: (_, { id }) => deleteClientByID(id)
    },
    addClientProject: {
      type: addClientProjectPayload,
      args: {
        clientID: { type: graphql.GraphQLNonNull(graphql.GraphQLID) },
        input:    { type: graphql.GraphQLNonNull(addClientProjectInput) },
      },
      resolve: (_, {clientID, input}) => addClientProjectToClient(clientID, input)
    },
    deleteClientProject: {
      type: clientProjectType,
      args: {
        id: { type: graphql.GraphQLNonNull(graphql.GraphQLID) }
      },
      resolve: (_, { id }) => deleteClientProjectByID(id)
    },
  }
});
