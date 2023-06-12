import { type Request, type Response, type NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { authConfig } from '../utils/auth';
import { AppError } from '../errors/app-error';

interface ITokenPayload {
  id: string
  iat: number
  exp: number
}

export const ensureAuthentication = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  const authHeader = request.headers.authorization;
  if (authHeader === undefined) {
    throw new AppError('Falha de autenticação, nenhum token fornecido', 401);
  }
  const [, token] = authHeader.split(' ');
  const { secret } = authConfig.jwt;
  try {
    const decoded = verify(token, secret);
    const { id } = decoded as ITokenPayload;
    request.user = { id };
    next();
    return;
  } catch {
    throw new AppError('Falha de autenticação, faça login novamente', 401);
  }
};
