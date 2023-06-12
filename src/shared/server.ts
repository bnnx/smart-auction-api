import 'reflect-metadata';
import dotenv from 'dotenv';
import express, { type Express } from 'express';
import Web3 from 'web3';
import { CONTACT_ABI, CONTACT_ADDRESS } from '../config/truffle';

dotenv.config();

const port: string = process.env.PORT;
const app: Express = express();

const server = async (): Promise<void> => {
  try {
    // await PostgresDataSource.initialize()

    const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));

    // const accounts = await web3.eth.getAccounts();
    // const contactList = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);

    app.listen(port, () => {
      console.log(`🚀 Server started on port ${port}!`);
    });
  } catch (err) {
    console.error(err);
  }
};

server();
