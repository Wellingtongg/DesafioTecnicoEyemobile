import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IrootReducer } from '../store';
import { changeFilter } from '../store/transactions/actions';
import data from './../json_desafio.json';

interface IFilterButton {
  name: string
}

const FilterButton: React.FC<IFilterButton> = ({ name, children }) => {
  const dispatch = useDispatch();
  const { activeButton } = useSelector((state: IrootReducer) => state.transaction);

  const handleFilterClick = (target: HTMLButtonElement): void => {
    dispatch(changeFilter(target.name as 'hoje' || 'ultima_semana' || 'ultimo_mes' || 'outro_periodo', data.transactions));
  }

  return (
    <button
      name={name}
      className={activeButton === name ? 'active' : ''}
      onClick={e => handleFilterClick(e.target as HTMLButtonElement)}
    >
      {children}
    </button>
  );
}

export default FilterButton;