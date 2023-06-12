import { type Express, json } from 'express';
import { cors } from '../middlewares';

export const setupMiddlewares = (app: Express): void => {
  app.use(json());
  app.use(cors);
};
