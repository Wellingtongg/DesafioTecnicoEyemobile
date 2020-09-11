import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import { router } from './routes';
import basicAuth from 'express-basic-auth';
import { errors } from 'celebrate';
import ErrorHandler from './ErrorHandler';

const app = express();

app.use(express.json());
app.use(
  basicAuth({
    users: { 'portal': '123456' },
    challenge: true,
  })
);
app.use(router);
app.use(errors());

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof ErrorHandler) {
    return response.status(err.statusCode).json({
      status: 'erro',
      mensagem: err.message,
    });
  }
});

export { app };