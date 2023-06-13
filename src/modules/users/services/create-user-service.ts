import { injectable, inject } from 'tsyringe';
import { type IUsersRepository } from '../contracts/repositories/users-repository';
import { User } from '../entities/user-entity';
import { ICreateUserDTO } from '../contracts/dtos/create-user-dto';
import { IHashProvider } from '../../../shared/providers/hash-provider/contracts/hash-provider';
import { AppError } from '../../../shared/errors/app-error';

@injectable()
export class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private readonly usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    email,
    firstName,
    lastName,
    password,
  }: ICreateUserDTO): Promise<User> {
    const userWithEmail = await this.usersRepository.findByEmail(email);

    if (userWithEmail) {
      throw new AppError('Já existe um usuário com esse email, faça o login!');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      email,
      firstName,
      lastName,
      password: hashedPassword,
    });

    return user;
  }
}
