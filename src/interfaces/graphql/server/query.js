import * as graphql from 'graphql';

import { timeRecordType, clientType } from '../types';
import { getTimeRecordByID, getClientByID } from '../resolvers';

export const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    client: {
      type: clientType,
      args: {
        id: { type: graphql.GraphQLNonNull(graphql.GraphQLID) }
      },
      // resolver receive parameters: (client, args, context, info)
      resolve: (_, { id }) => getClientByID(id)
    },
    timeRecord: {
      type: timeRecordType,
      args: {
        id: { type: graphql.GraphQLNonNull(graphql.GraphQLID) }
      },
      resolve: (_, { id }) => getTimeRecordByID(id),
    }
  }
});
