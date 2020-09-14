import React from 'react';
import { IrootReducer } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { setClassName } from '../store/mainNav/actions';

const MainNav: React.FC = () => {
  const dispatch = useDispatch();
  const { className } = useSelector((state: IrootReducer) => state.mainNav);

   return (
    <nav id="main-nav" className={className}>
      <img className="logo" src="/images/ic_logo.svg" alt="logo" />
      <ul>
        <li>
          <NavLink exact activeClassName='active' to='/' onClick={() => dispatch(setClassName(''))}>
            <ReactSVG src="/images/ic_dashboard.svg" />
            <div>Meu Faturamento</div>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/cadastro' onClick={() => dispatch(setClassName(''))}>
            <ReactSVG src="/images/ic_cadastro.svg" />
            <div>Cadastro</div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;