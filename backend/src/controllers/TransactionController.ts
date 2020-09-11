import { Request, Response } from 'express';
import { ITransactionController } from '../interfaces/ITransaction';
import { TransactionService } from '../services/TransactionService';

export class TransactionController implements ITransactionController {
  public async index(request: Request, response: Response): Promise<Response> {
    const transactions = await new TransactionService().list();

    return response.status(200).json(transactions);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const transactionCreated = await new TransactionService().create(data);

    return response.status(201).json(transactionCreated);
  }
}
