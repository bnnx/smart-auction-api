import '../providers';
import { container } from 'tsyringe';
import { type IUsersRepository } from '../../modules/users/contracts/repositories/users-repository';
import { UsersRepository } from '../../modules/users/repositories/typeorm/users-repository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
