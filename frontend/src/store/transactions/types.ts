import { unitOfTime } from "moment";

export const CHANGE_FILTER = 'CHANGE_FILTER';

export interface ITransaction {
  id: number;
  amount: number;
  product_id: number;
  type: string;
  product_name: string;
  time: string;
}

export interface ITotals {
  incomeExpenses: {
    income: {
      amount: number;
      formattedAmount: string;
      percentage: string;
    },
    expenses: {
      amount: number;
      formattedAmount: string;
      percentage: string;
    },
    total: string;
  },
  services: Array<{
    id: number;
    name: string;
    amount: number;
    formattedAmount?: string;
    percentage?: string;
  }>,
  servicesTotal: number;
  formattedServicesTotal: string;
}

export interface ITransactionState extends ITotals {
  activeButton: string;
}

interface activateButton {
  type: typeof CHANGE_FILTER
  payload: {
    buttonName: 'hoje' | 'ultima_semana' | 'ultimo_mes' | 'outro_periodo';
    transactions: ITransaction[];
  }
}

export type TransactionActionTypes = activateButton;

export interface IFilters {
  hoje: unitOfTime.Diff,
  ultima_semana: unitOfTime.Diff,
  ultimo_mes: unitOfTime.Diff,
}