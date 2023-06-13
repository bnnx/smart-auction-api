import { type Request, type Response } from 'express';
import { container } from 'tsyringe';
import { CreateSessionService } from '../services/create-session-service';

export class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const createSessionService = container.resolve(CreateSessionService);
    const session = await createSessionService.execute({
      email,
      password,
    });
    return response.json(session);
  }
}
