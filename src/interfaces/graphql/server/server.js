import * as graphql from 'graphql';
import graphqlHTTP from 'express-graphql';

import { queryType } from './';

export const schema = new graphql.GraphQLSchema({ query: queryType });

export const server = graphqlHTTP({
  schema: schema,
  graphiql: true,
})
