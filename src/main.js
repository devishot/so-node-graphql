import express from 'express';
import cors from 'cors';

import { server } from './interfaces/graphql/server';

const port = 8080,
      app = express();

app.use(
  cors({
    'origin': '*',
  })
)
app.use('/graphql', server);
app.listen(port);