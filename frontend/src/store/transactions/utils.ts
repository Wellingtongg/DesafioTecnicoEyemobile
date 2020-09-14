import { IFilters, ITotals } from "./types";
import moment from 'moment';

const filters: IFilters = {
  hoje: 'days',
  ultima_semana: 'weeks',
  ultimo_mes: 'months',
}

export const transactionIsInDate = (buttonName: 'hoje' | 'ultima_semana' | 'ultimo_mes' | 'outro_periodo', time: string): boolean => {
  if (buttonName === 'outro_periodo') {
    if (moment().diff(time, 'month') > 0) {
      return true;
    }
    return false;
  } else {
    if (moment().diff(time, filters[buttonName]) === 0) {
      return true;
    }
    return false;
  }
}

export const formatAmount = (amount: number): string => {
  return amount.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL'
  });
}

const formatPercentage = (percentage: number): string => {
  return percentage.toFixed(0) + '%';
}

const calculateAndFormatIncomeExpenses = (totals: ITotals): ITotals => {
  totals.incomeExpenses.total = formatAmount(totals.incomeExpenses.income.amount - totals.incomeExpenses.expenses.amount)
    .replace('R$', '').trim();

  totals.incomeExpenses.income.formattedAmount = formatAmount(totals.incomeExpenses.income.amount);
  totals.incomeExpenses.expenses.formattedAmount = formatAmount(totals.incomeExpenses.expenses.amount);

  if (totals.incomeExpenses.income.amount !== 0) {
    totals.incomeExpenses.income.percentage = formatPercentage(
      (totals.incomeExpenses.income.amount * 100) /
      (totals.incomeExpenses.income.amount + totals.incomeExpenses.expenses.amount));
  } else {
    totals.incomeExpenses.income.percentage = '0%';
  }

  if (totals.incomeExpenses.expenses.amount !== 0) {
    totals.incomeExpenses.expenses.percentage = formatPercentage(
      (totals.incomeExpenses.expenses.amount * 100) /
      (totals.incomeExpenses.expenses.amount + totals.incomeExpenses.income.amount));
  } else {
    totals.incomeExpenses.expenses.percentage = '0%';
  }

  return totals;
}

const calculateAndFormatServices = (totals: ITotals): ITotals => {
  totals.services = totals.services.map(service => {
    service.formattedAmount = formatAmount(service.amount);
    service.percentage = formatPercentage((service.amount * 100) / totals.servicesTotal);
    return service;
  });

  totals.formattedServicesTotal = formatAmount(totals.servicesTotal);
  return totals;
}

export const handleResultsFromTotals = (totals: ITotals): ITotals => {
  totals = calculateAndFormatIncomeExpenses(totals);
  totals = calculateAndFormatServices(totals);
  return totals;
}