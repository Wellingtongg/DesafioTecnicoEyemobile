import { ITransactionRepository, ITransaction } from "../interfaces/ITransaction";
import knex from '../database/connection';
import { Balance } from "../models/Balance";

export class TransactionRepository implements ITransactionRepository {
  public async list(): Promise<any[] | false> {
    try {
      return await knex('transactions')
        .orderBy('horario', 'desc')
        .select('nsu', 'valor', 'liquido', 'bandeira', 'modalidade', 'horario', 'disponivel');
    } catch (err) {
      return false;
    }
  }

  public async create(data: ITransaction): Promise<boolean> {
    try {
      await knex('transactions').insert(data);
      return true;
    } catch (err) {
      return false;
    }
  }

  public async getBalance(): Promise<Balance | false> {
    try {
      const balance = await knex('transactions')
        .select(knex.raw(
          "SUM(IF(CURDATE() >= disponivel, liquido, 0)) AS disponivel," +
          "SUM(IF(CURDATE() < disponivel, liquido, 0))  AS receber"
        )).first();
      return JSON.parse(JSON.stringify(balance));
    } catch (err) {
      return false;
    }
  }
}