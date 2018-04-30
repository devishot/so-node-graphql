import * as graphql from 'graphql';

export const nodeInterface = new graphql.GraphQLInterfaceType({
  name: 'Node',
  description: 'Relay Global Object Identification Specification',
  fields: () => ({
    id: {
      type: graphql.GraphQLNonNull(graphql.GraphQLString),
      description: 'Object identification.',
    },
  })
});
