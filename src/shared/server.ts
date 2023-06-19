import 'reflect-metadata';
import dotenv from 'dotenv';
import { PostgresDataSource } from './typeorm';
import { app } from './app';

dotenv.config();

const port: string = process.env.PORT;

const server = async (): Promise<void> => {
  try {
    await PostgresDataSource.initialize();

    app.listen(port, () => {
      console.log(`🚀 Server started on port ${port}!`);
    });
  } catch (err) {
    console.error(err);
  }
};

server();
