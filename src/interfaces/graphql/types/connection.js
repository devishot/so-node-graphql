import * as graphql from 'graphql';

import { nodeInterface } from './';


export const edgeInterface = new graphql.GraphQLInterfaceType({
    name: 'Edge',
    description: 'Interface of Relay Connection pattern for pagination',
    fields: () => ({
      cursor: {
        type: graphql.GraphQLNonNull(graphql.GraphQLString),
        description: 'Value of this fields will be passed back to the server.',
      },
      node: {
        type: graphql.GraphQLNonNull(nodeInterface),
        description: 'This field must return any type of value, but cannot return a list.',
      },
    })
  });
  
  export const pageInfo = new graphql.GraphQLObjectType({
    name: 'PageInfo',
    description: 'Object of Relay Connection pattern for pagination',
    fields: {
      hasNextPage: { type: graphql.GraphQLNonNull(graphql.GraphQLBoolean) },
      hasPreviousPage: { type: graphql.GraphQLNonNull(graphql.GraphQLBoolean) },
    }
  });
  
  export const connectionInterface = new graphql.GraphQLInterfaceType({
    name: 'Connection',
    description: 'Interface of Relay Connection pattern for pagination',
    fields: () => ({
      edges: {
        type: new graphql.GraphQLList(edgeInterface),
        description: 'This fields return a list type that wraps an edge type.',
      },
      pageInfo: {
        type: graphql.GraphQLNonNull(pageInfo),
        description: 'This field must return a non‐null PageInfo object.',
      },
    })
  });