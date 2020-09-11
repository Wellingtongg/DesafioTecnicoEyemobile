import { Request, Response } from 'express';
import { Balance } from '../models/Balance';

export interface IBalance {
  disponivel: number;
  receber: number;
}

export interface IBalanceController {
  index(request: Request, response: Response): Promise<Response>;
}

export interface IBalanceService {
  get(): Promise<Balance | false>;
}