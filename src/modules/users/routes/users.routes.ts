import { celebrate } from 'celebrate';
import { Router, type RequestHandler } from 'express';
import { ensureAuthentication } from '../../../shared/middlewares/ensure-authentication';
import { CreateUserSchema } from '../contracts/schemas/create-user-schema';
import { UsersController } from '../controllers/users-controller';

export const usersRoutes = Router();
const usersController = new UsersController();

usersRoutes.get(
  '/',
  ensureAuthentication,
  usersController.index as RequestHandler,
);
usersRoutes.post(
  '/',
  celebrate(CreateUserSchema),
  usersController.create as RequestHandler,
);
usersRoutes.get(
  '/:userId',
  ensureAuthentication,
  usersController.read as RequestHandler,
);
