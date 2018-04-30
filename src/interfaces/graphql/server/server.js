import * as graphql from 'graphql';
import graphqlHTTP from 'express-graphql';

import { queryType } from './';

var schema = new graphql.GraphQLSchema({ query: queryType });

export const server = graphqlHTTP({
  schema: schema,
  graphiql: true,
})
