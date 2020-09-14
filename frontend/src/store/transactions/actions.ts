import { CHANGE_FILTER, TransactionActionTypes, ITransaction } from "./types";

export function changeFilter(buttonName: 'hoje' | 'ultima_semana' | 'ultimo_mes' | 'outro_periodo', transactions: ITransaction[]): TransactionActionTypes {
  return {
    type: CHANGE_FILTER,
    payload: {
      buttonName,
      transactions,
    },
  }
}