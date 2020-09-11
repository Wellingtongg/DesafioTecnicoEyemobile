import { Request, Response } from 'express';
import { IBalanceController } from '../interfaces/IBalance';
import { BalanceService } from '../services/BalanceService';

export class BalanceController implements IBalanceController {
  public async index(request: Request, response: Response): Promise<Response> {
    const balance = await new BalanceService().get();

    return response.status(200).json(balance);
  }
}
