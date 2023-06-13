import { sign } from 'jsonwebtoken';
import { injectable, inject } from 'tsyringe';
import { IUsersRepository } from '../../users/contracts/repositories/users-repository';
import { authConfig } from '../../../shared/utils';
import { ICreateSessionDTO } from '../contracts/dtos/create-session-dto';
import { AppError } from '../../../shared/errors/app-error';
import { User } from '../../users/entities/user-entity';
import { IHashProvider } from '../../../shared/providers/hash-provider/contracts/hash-provider';

type IResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};

@injectable()
export class CreateSessionService {
  constructor(
    @inject('UsersRepository')
    private readonly usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    email,
    password,
  }: ICreateSessionDTO): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email ou senha inválido(s)!', 401);
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatched) {
      throw new AppError('Email ou senha inválido(s)!', 401);
    }

    const { secret, expiresIn, refreshExpiresIn } = authConfig.jwt;

    const accessToken = sign({ id: user.id }, secret, {
      expiresIn,
    });

    const refreshToken = sign({ id: user.id }, secret, {
      expiresIn: refreshExpiresIn,
    });

    return {
      accessToken,
      refreshToken,
      user,
    };
  }
}
