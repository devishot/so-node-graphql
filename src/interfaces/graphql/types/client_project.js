import * as graphql from 'graphql';

import { connectionInterface, edgeInterface, pageInfo, nodeInterface } from './';
import { getTimeRecordsByProject } from '../resolvers';

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

export const clientProjectEdgeType = new graphql.GraphQLObjectType({
  name: 'ProjectEdge',
  fields: {
    cursor: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
    node: { type: graphql.GraphQLNonNull(clientProjectType) },
  },
  interfaces: [edgeInterface],
});

export const clientProjectConnectionType = new graphql.GraphQLObjectType({
  name: 'ProjectConnection',
  fields: {
    edges: { type: new graphql.GraphQLList(clientProjectEdgeType) },
    pageInfo: { type: graphql.GraphQLNonNull(pageInfo) },
  },
  interfaces: [connectionInterface],
});
