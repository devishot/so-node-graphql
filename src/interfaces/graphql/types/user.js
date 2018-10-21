import * as graphql from 'graphql';

import { nodeInterface } from './';

export const userType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: graphql.GraphQLNonNull(graphql.GraphQLID) },
    firstName: { type: graphql.GraphQLString },
    lastName: { type: graphql.GraphQLString },
  },
  interfaces: [nodeInterface],
});
