import { injectable, inject } from 'tsyringe';
import { type IUsersRepository } from '../contracts/repositories/users-repository';
import { User } from '../entities/user-entity';
import { AppError } from '../../../shared/errors/app-error';

type IProps = {
  userId: string;
};

@injectable()
export class ReadUserService {
  constructor(
    @inject('UsersRepository')
    private readonly usersRepository: IUsersRepository,
  ) {}

  public async execute({ userId }: IProps): Promise<User> {
    const user = await this.usersRepository.findById(userId);
    if (!user) {
      throw new AppError(
        'Usuário não encontrado, verifique e tente novamente!',
        401,
      );
    }
    return user;
  }
}
