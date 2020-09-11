import { Router } from 'express';
import { TransactionController } from './controllers/TransactionController';
import { BalanceController } from './controllers/BalanceController';
import { celebrate, Joi, Segments } from 'celebrate';

const router = Router();

const balanceController = new BalanceController();
const transactionController = new TransactionController();

router.get('/balance', balanceController.index);
router.get('/transactions', transactionController.index);

router.post('/transactions', celebrate({
  [Segments.BODY]: Joi.object().keys({
    nsu: Joi.string().required(),
    valor: Joi.number().required(),
    bandeira: Joi.string().valid(...['VISA', 'MASTERCARD', 'ELO', 'AMEX']).required(),
    modalidade: Joi.string().valid(...['debito', 'credito']).required(),
    horario: Joi.date().required(),
  }),
}), transactionController.create);

export { router };