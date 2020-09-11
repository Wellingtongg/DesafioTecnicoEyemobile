import { Transaction } from '../models/Transaction';
import { Request, Response } from 'express';
import { Balance } from '../models/Balance';

export interface ITransaction {
  nsu: string;
  valor: number;
  liquido: number;
  bandeira: 'VISA' | 'MASTERCARD' | 'ELO' | 'AMEX';
  modalidade: 'credito' | 'debito';
  horario: Date;
  disponivel: string;
}

export interface ITransactionController {
  index(request: Request, response: Response): Promise<Response>;
  create(request: Request, response: Response): Promise<Response>;
}

export interface ITransactionService {
  list(): Promise<Transaction[]>;
  create(data: ITransaction): Promise<boolean>;
}

export interface ITransactionRepository {
  list(): Promise<any[] | false>;
  create(data: ITransaction): Promise<boolean>;
  getBalance(): Promise<Balance | false>;
}