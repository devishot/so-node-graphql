import * as graphql from 'graphql';
import graphqlHTTP from 'express-graphql';

import { queryType, mutationType } from './';

export const schema = new graphql.GraphQLSchema({ 
  query: queryType,
  mutation: mutationType
});

export const server = graphqlHTTP({
  schema: schema,
  graphiql: true,
})
