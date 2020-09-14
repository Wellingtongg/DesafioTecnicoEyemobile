import { CHANGE_FILTER, TransactionActionTypes, ITransactionState, ITransaction, ITotals } from './types';
import { handleResultsFromTotals, transactionIsInDate } from './utils';

const initialTotals: ITotals = {
  incomeExpenses: {
    income: {
      amount: 0,
      formattedAmount: 'R$ 0,00',
      percentage: '0%',
    },
    expenses: {
      amount: 0,
      formattedAmount: 'R$ 0,00',
      percentage: '0%',
    },
    total: '0,00',
  },
  services: [],
  servicesTotal: 0,
  formattedServicesTotal: 'R$ 0,00',
}

const initialState: ITransactionState = {
  activeButton: 'hoje',
  ...initialTotals,
}

export function transactionReducer(state = initialState, action: TransactionActionTypes): ITransactionState {
  switch (action.type) {
    case CHANGE_FILTER:
      let totals = action.payload.transactions.reduce<ITotals>((accumulator: ITotals, transaction: ITransaction) => {
        if (transactionIsInDate(action.payload.buttonName, transaction.time)) {
          if (transaction.type === 'Receitas') {
            accumulator.incomeExpenses.income.amount += transaction.amount;
            accumulator.servicesTotal += transaction.amount;
  
            const serviceIndex = accumulator.services.findIndex(service => service.name === transaction.product_name);
            if (serviceIndex === -1) {
              // Adiciona um novo serviço no array
              accumulator.services.push({
                id: transaction.product_id,
                name: transaction.product_name,
                amount: transaction.amount,
              });
            } else {
              // Atualiza o valor do serviço
              accumulator.services[serviceIndex].amount += transaction.amount;
            }
          } else if (transaction.type === 'Despesas') {
            accumulator.incomeExpenses.expenses.amount += transaction.amount;
          }
        }
        return accumulator;
      }, {
        incomeExpenses: {
          income: {
            amount: 0,
            formattedAmount: 'R$ 0,00',
            percentage: '0%',
          },
          expenses: {
            amount: 0,
            formattedAmount: 'R$ 0,00',
            percentage: '0%',
          },
          total: '0,00',
        },
        services: [],
        servicesTotal: 0,
        formattedServicesTotal: 'R$ 0,00',
      });

      totals = handleResultsFromTotals(totals);
      return {
        ...totals,
        activeButton: action.payload.buttonName,
      }
    default:
      return state;
  }
}
