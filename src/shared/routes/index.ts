import { Router } from 'express';
import { usersRoutes } from '../../modules/users/routes/users.routes';
import { sessionsRoutes } from '../../modules/sessions/routes/sessions.routes';

export const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoutes);
