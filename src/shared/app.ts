import 'reflect-metadata';
import 'express-async-errors';
import './container';
import express, { type Express } from 'express';
import { setupRoutes, setupMiddlewares, setupErrorHandler } from './utils';

export const app: Express = express();

setupMiddlewares(app);
setupRoutes(app);
setupErrorHandler(app);
