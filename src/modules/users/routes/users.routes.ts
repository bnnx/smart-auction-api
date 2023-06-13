import { celebrate } from 'celebrate';
import { Router } from 'express';
import { ensureAuthentication } from '../../../shared/middlewares/ensure-authentication';
import { CreateUserSchema } from '../contracts/schemas/create-user-schema';
import { UsersController } from '../controllers/users-controller';

export const usersRoutes = Router();
const usersController = new UsersController();

usersRoutes.get('/', ensureAuthentication, usersController.index);
usersRoutes.post('/', celebrate(CreateUserSchema), usersController.create);
usersRoutes.get('/:userId', ensureAuthentication, usersController.read);
usersRoutes.delete('/:userId', ensureAuthentication, usersController.delete);
