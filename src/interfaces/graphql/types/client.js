import * as graphql from 'graphql';

import { nodeInterface } from './';
import { getClientProjectsByClient, getClientProjectByID } from '../resolvers';

export const clientType = new graphql.GraphQLObjectType({
  name: 'Client',
  fields: {
    id: { type: graphql.GraphQLNonNull(graphql.GraphQLID) },
    firstName: { type: graphql.GraphQLString },
    lastName: { type: graphql.GraphQLString },
    companyName: { type: graphql.GraphQLString },
    projects: {
      type: new graphql.GraphQLList(require('./client_project').clientProjectConnectionType),
      args: {
        first: { type: graphql.GraphQLInt }, 
        after: { type: graphql.GraphQLString }, 
        last: { type: graphql.GraphQLInt }, 
        before: { type: graphql.GraphQLString },
      },
      resolve: (client, { first, after, last, before }) => {
        return getClientProjectsByClient(client, { first, after, last, before });
      }
    },
  },
  interfaces: [nodeInterface],
});
