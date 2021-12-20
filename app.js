import http from 'http';
import { app } from './server/index.js';
import { connect } from './server/database.js';
import { config } from './server/config/index.js';

const { database, port } = config;
connect({
  username: database.username,
  password: database.password,
});

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
