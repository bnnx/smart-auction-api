import { Router } from 'express';
import { usersRoutes } from '../../modules/users/routes/users.routes';

export const routes = Router();

routes.use('/users', usersRoutes);
