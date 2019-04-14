import express from 'express';
import cors from 'cors';

import config from 'Config';
import { server } from './interfaces/graphql/server';

const cfg = config.read(),
      port = cfg.node_port,
      app = express();

app.use(
  cors({
    'origin': '*',
  })
)
app.use('/graphql', server);

app.get('/config', (req, res) => {
  res.json(cfg);
});

app.listen(port);