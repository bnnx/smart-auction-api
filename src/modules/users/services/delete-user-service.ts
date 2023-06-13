import { injectable, inject } from 'tsyringe';
import { type IUsersRepository } from '../contracts/repositories/users-repository';
import { AppError } from '../../../shared/errors/app-error';

type IProps = {
  id: string;
};

@injectable()
export class DeleteUserService {
  constructor(
    @inject('UsersRepository')
    private readonly usersRepository: IUsersRepository,
  ) {}

  public async execute({ id }: IProps): Promise<void> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError(
        'Usuário não encontrado, verifique e tente novamente!',
      );
    }

    await this.usersRepository.delete(user.id);
  }
}
