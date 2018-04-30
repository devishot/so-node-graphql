import * as graphql from 'graphql';

import { timeRecordType } from '../types';
import { getTimeRecordByID } from '../resolvers';

export const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    timeRecord: {
      type: timeRecordType,
      // `args` describes the arguments that the `user` query accepts
      args: {
        id: { type: graphql.GraphQLNonNull(graphql.GraphQLString) }
      },
      resolve: (_, { id }) => getTimeRecordByID(id),
    }
  }
});
