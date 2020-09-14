import React, { useEffect } from 'react';
import FilterButton from '../components/FilterButton';
import ServicesChart from '../components/ServicesChart';
import IncomeExpensesChart from '../components/IncomeExpensesChart';
import { IrootReducer } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../store/transactions/actions';
import data from './../json_desafio.json';

const Totals: React.FC = () => {
  const dispatch = useDispatch();
  const { incomeExpenses } = useSelector((state: IrootReducer) => state.transaction);

  useEffect(() => {
    dispatch(changeFilter('hoje', data.transactions));
  }, [dispatch]);

  return (
    <>
      <div className="filter">
        <FilterButton name="hoje">Hoje</FilterButton>
        <FilterButton name="ultima_semana">Última Semana</FilterButton>
        <FilterButton name="ultimo_mes">Último Mês</FilterButton>
        <FilterButton name="outro_periodo">Outro Período</FilterButton>
      </div>

      <div className="container-totals">
        <div className="container-amount">
          <div>Valor Total</div>
          <div>
            <span>R$</span>
            <span>{incomeExpenses.total}</span>
          </div>
        </div>
        <hr className="totals" />
        <div className="container-charts">
          <ServicesChart />
          <IncomeExpensesChart />
        </div>
      </div>
    </>
  );
}

export default Totals;