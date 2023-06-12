import { type Repository } from 'typeorm';
import { type IUsersRepository } from '../../contracts/repositories/users-repository';
import { PostgresDataSource } from '../../../../shared/typeorm';
import { User } from '../../entities/user-entity';
import { type ICreateUserDTO } from '../../contracts/dtos/create-user-dto';

export class UsersRepository implements IUsersRepository {
  private readonly ormRepository: Repository<User>

  constructor() {
    this.ormRepository = PostgresDataSource.getRepository(User);
  }

  public async findById(id: string): Promise<User | null> {
    return this.ormRepository.findOne({ where: { id } });
  }

  public async findByEmail(email: string): Promise<User | null> {
    return this.ormRepository.findOne({ where: { email } });
  }

  public async create(payload: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(payload);
    return this.ormRepository.save(user);
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}
