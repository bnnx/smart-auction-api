import { injectable, inject } from 'tsyringe';
import { type IUsersRepository } from '../contracts/repositories/users-repository';
import { User } from '../entities/user-entity';

@injectable()
export class ListUsersService {
  constructor(
    @inject('UsersRepository')
    private readonly usersRepository: IUsersRepository,
  ) {}

  public async execute(): Promise<User[]> {
    const users = await this.usersRepository.findAll();
    return users;
  }
}
