import { ITransactionService, ITransaction } from "../interfaces/ITransaction";
import { TransactionRepository } from "../repositories/TransactionRepository";
import { Transaction } from "../models/Transaction";
import ErrorHandler from "../ErrorHandler";

export class TransactionService implements ITransactionService {
  public async list(): Promise<Transaction[]> {
    const transactions = await new TransactionRepository().list();
    if (transactions === false) {
      throw new ErrorHandler('Não foi possível listar o extrato', 500);
    }
    return transactions;
  }

  public async create(data: ITransaction): Promise<boolean> {
    const transaction = new Transaction(data);
    const transactionCreated =  await new TransactionRepository().create(transaction);
    if (transactionCreated === false) {
      throw new ErrorHandler('Não foi possível criar a transação', 500);
    }
    return transactionCreated;
  }
}