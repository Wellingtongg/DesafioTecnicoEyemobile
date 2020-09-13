import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

const MainNav: React.FC = () => {
  return (
    <nav id="main-nav">
      <img className="logo" src="/images/ic_logo.svg" alt="logo" />
      <ul>
        <li>
          <NavLink exact activeClassName='active' to='/'>
            <ReactSVG src="/images/ic_dashboard.svg" />
            <div>Meu Faturamento</div>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/cadastro'>
            <ReactSVG src="/images/ic_cadastro.svg" />
            <div>Cadastro</div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;