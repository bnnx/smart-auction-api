import { type User } from '../../entities/user-entity';
import { type ICreateUserDTO } from '../dtos/create-user-dto';

export interface IUsersRepository {
  findAll: () => Promise<User[]>;
  findById: (id: string) => Promise<User | null>;
  findByEmail: (email: string) => Promise<User | null>;
  create: (payload: ICreateUserDTO) => Promise<User>;
  save: (user: User) => Promise<User>;
}
