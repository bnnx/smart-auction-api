import { container } from 'tsyringe';
import { type IHashProvider } from './hash-provider/contracts/hash-provider';
import { BcryptHashProvider } from './hash-provider/implementations/bcrypt-hash-provider';

container.registerSingleton<IHashProvider>('HashProvider', BcryptHashProvider);
