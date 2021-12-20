import express from 'express';
import adminRoutes from '../server/api/index.js';
import {
  showErrors,
  errorHandler,
} from './api/controllers/error.controller.js';

export const app = express();

app.use(express.urlencoded({ extends: true }));
app.use(express.json());

app.use('/admin', adminRoutes);

app.use(errorHandler);
app.use(showErrors);
