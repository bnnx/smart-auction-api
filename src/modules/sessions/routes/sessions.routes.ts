import { celebrate } from 'celebrate';
import { Router } from 'express';
import { SessionsController } from '../controllers/sessions-controller';
import { CreateSessionSchema } from '../contracts/schemas/create-session-schema';

export const sessionsRoutes = Router();
const sessionsController = new SessionsController();

sessionsRoutes.post(
  '/',
  celebrate(CreateSessionSchema),
  sessionsController.create,
);
