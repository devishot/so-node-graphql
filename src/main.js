import express from 'express';

import { server } from './interfaces/graphql/server';

const Port = 4000;

var app = express();
app.use('/graphql', server);
app.listen(Port);
