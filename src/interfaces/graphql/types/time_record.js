import * as graphql from 'graphql';

import { nodeInterface } from './';
import { getTimeRecordOwner } from '../resolvers';

export const timeRecordType = new graphql.GraphQLObjectType({
  name: 'TimeRecord',
  fields: {
    id: { type: graphql.GraphQLNonNull(graphql.GraphQLID) },
    timestamp: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
    amount: { type: graphql.GraphQLNonNull(graphql.GraphQLInt) },
    description: { type: graphql.GraphQLString },
    owner: { 
      type: graphql.GraphQLNonNull(require('./user').userType),
      resolve: timeRecord => getTimeRecordOwner(timeRecord),
    },
  },
  interfaces: [nodeInterface],
});
