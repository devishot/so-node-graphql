import * as graphql from 'graphql';

import { nodeInterface, connectionInterface, edgeInterface, pageInfo } from './';
import { getClientByClientProject, getTimeRecordsByProject } from '../resolvers';

export const clientProjectType = new graphql.GraphQLObjectType({
  name: 'Project',
  fields: {
    id: { type: graphql.GraphQLNonNull(graphql.GraphQLID) },
    title: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
    description: { type: graphql.GraphQLString },
    time_records: {
      type: new graphql.GraphQLList(require('./time_record').timeRecordType),
      resolve: project => getTimeRecordsByProject(project),
    },
  },
  interfaces: [nodeInterface],
});

export const clientProjectConnectionType = new graphql.GraphQLObjectType({
  fields: {
    edges: { type: graphql.GraphQLList(clientProjectEdgeType) },
    pageInfo: { type: graphql.GraphQLNonNull(pageInfo) },
  },
  interfaces: [connectionInterface],
});

export const clientProjectEdgeType = new graphql.GraphQLObjectType({
  fields: {
    cursor: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
    node: { type: graphql.GraphQLNonNull(clientProjectType) },
  },
  interfaces: [edgeInterface],
});