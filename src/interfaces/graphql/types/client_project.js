import * as graphql from 'graphql';

import { connectionInterface, edgeInterface, pageInfo, nodeInterface } from './';
import { getTimeRecordsByProject } from '../resolvers';


// Connection types
export const clientProjectType = new graphql.GraphQLObjectType({
  name: 'Project',
  fields: {
    id:           { type: graphql.GraphQLNonNull(graphql.GraphQLID) },
    timestamp:    { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
    title:        { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
    description:  { type: graphql.GraphQLString },
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
    cursor:   { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
    node:     { type: graphql.GraphQLNonNull(clientProjectType) },
  },
  interfaces: [edgeInterface],
});

export const clientProjectConnectionType = new graphql.GraphQLObjectType({
  name: 'ProjectConnection',
  fields: {
    edges:    { type: graphql.GraphQLNonNull(new graphql.GraphQLList(clientProjectEdgeType)) },
    pageInfo: { type: graphql.GraphQLNonNull(pageInfo) },
  },
  interfaces: [connectionInterface],
});


// Mutation input and output types
export const addClientProjectInput = new graphql.GraphQLInputObjectType({
  name: 'AddProjectInput',
  fields: {
    title:        { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
    description:  { type: graphql.GraphQLString },
  },
});

export const addClientProjectPayload = new graphql.GraphQLObjectType({
  name: 'AddProjectPayload',
  fields: {
    payloadEdge: { type: clientProjectEdgeType },
  },
});