import * as graphql from 'graphql';

import { nodeInterface, userType } from './';
import { getTimeRecordOwner } from '../resolvers';

export const timeRecordType = new graphql.GraphQLObjectType({
  name: 'TimeRecord',
  fields: {
    id: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
    amount: { type: graphql.GraphQLNonNull(graphql.GraphQLInt) },
    timestamp: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
    description: { type: graphql.GraphQLString },
    owner: { 
      type: graphql.GraphQLNonNull(userType),
      resolve: timeRecord => getTimeRecordOwner(timeRecord),
    },
  },
  interfaces: [nodeInterface],
});