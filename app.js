import http from 'http';
import { app } from './server/index.js';
import { config } from './server/config/index.js';

const { port } = config;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
