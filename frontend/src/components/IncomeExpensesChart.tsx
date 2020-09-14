import React from 'react';
import Chart from 'react-apexcharts';
import { IrootReducer } from '../store';
import { useSelector } from 'react-redux';
import { formatAmount } from '../store/transactions/utils';

const IncomeExpensesChart: React.FC = () => {
  const { incomeExpenses } = useSelector((state: IrootReducer) => state.transaction);

  const chart = {
    options: {
      chart: {
        id: 'chart-receitas-despesas',
        toolbar: {
          show: false,
        }
      },
      colors: ['#01DCAA', '#FE4F64'],
      yaxis: {
        labels: {
          formatter: (value: any) => formatAmount(value),
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '30%',
          endingShape: 'rounded',
          distributed: true
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: ['Receitas', 'Despesas'],
        labels: {
          show: false,
        },
      },
    },
    series: [
      {
        name: ['Receitas x Despesas'],
        data: [incomeExpenses.income.amount, incomeExpenses.expenses.amount]
      },
    ],
  }

  return (
    <div className="chart">
      <div className="title-chart">Receitas x Despesas</div>
      <Chart
        options={chart.options}
        series={chart.series}
        type="bar"
        width="300"
      />
      <ul className="itens-chart">
        <li>
          <div className="circle" style={{ backgroundColor: '#24e0b5'}} />
          Receitas
          <div>{incomeExpenses.income.formattedAmount} ({incomeExpenses.income.percentage})</div>
        </li>
        <li>
          <div className="circle" style={{ backgroundColor: '#fc687a'}} />
          Despesas
          <div>{incomeExpenses.expenses.formattedAmount} ({incomeExpenses.expenses.percentage})</div>
        </li>
      </ul>
    </div>
  );
}

export default IncomeExpensesChart;