import { injectable, inject } from 'tsyringe';
import { type IUsersRepository } from '../contracts/repositories/users-repository';
import { User } from '../entities/user-entity';
import { ICreateUserDTO } from '../contracts/dtos/create-user-dto';

@injectable()
export class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private readonly usersRepository: IUsersRepository,
  ) {}

  public async execute({
    email,
    firstName,
    lastName,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = await this.usersRepository.create({
      email,
      firstName,
      lastName,
      password,
    });
    return user;
  }
}
