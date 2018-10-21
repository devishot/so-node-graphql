import express from 'express';
import cors from 'cors';

import { server } from './interfaces/graphql/server';

const Port = 4000;

var app = express();
app.use(
  cors({
    'origin': '*',
  })
)
app.use('/graphql', server);
app.listen(Port);