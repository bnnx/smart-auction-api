import 'dotenv/config';

export const authConfig = {
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: '14d',
    refreshExpiresIn: '5y',
  },
};