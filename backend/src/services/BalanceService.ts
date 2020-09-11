import { TransactionRepository } from "../repositories/TransactionRepository";
import { IBalanceService } from "../interfaces/IBalance";
import { Balance } from "../models/Balance";
import ErrorHandler from "../ErrorHandler";

export class BalanceService implements IBalanceService {
  public async get(): Promise<Balance | false> {
    const balance = await new TransactionRepository().getBalance();
    if (balance === false) {
      throw new ErrorHandler('Não foi possível listar o saldo', 500);
    }
    return new Balance(balance);
  }
}