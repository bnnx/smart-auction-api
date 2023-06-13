import { type Request, type Response } from 'express';
import { container } from 'tsyringe';
import { ListUsersService } from '../services/list-users-service';
import { CreateUserService } from '../services/create-user-service';
import { type ICreateUserDTO } from '../contracts/dtos/create-user-dto';
import { ReadUserService } from '../services/read-user-service';

export class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUsersService = container.resolve(ListUsersService);
    const users = await listUsersService.execute();
    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { email, firstName, lastName, password }: ICreateUserDTO =
      request.body;
    const createUserService = container.resolve(CreateUserService);
    const user = await createUserService.execute({
      email,
      firstName,
      lastName,
      password,
    });
    return response.json(user);
  }

  public async read(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;
    const readUserService = container.resolve(ReadUserService);
    const user = await readUserService.execute({ userId });
    return response.json(user);
  }
}
