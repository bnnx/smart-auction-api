import { type Request, type Response } from 'express';
// import { type ICreateUserDTO } from '../contracts/dtos/create-user-dto';

export class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    // const {
    //   email,
    //   firstName,
    //   lastName,
    //   password,
    // }: ICreateUserDTO = request.body;

    return response.json({ success: 'no create' });
  }

  public async read(request: Request, response: Response): Promise<Response> {
    return response.json({ success: 'no read' });
  }
}
