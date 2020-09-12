import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

interface ISubNav {
  handleSubNavClick(activeSubNav: string): void;
}

const SubNav: React.FC<ISubNav> = ({ handleSubNavClick }) => {
  const [active, setActive] = useState('totais');
  
  return (
    <nav id="sub-nav">
      <ul>
        <li 
          className={active === 'totais' ? 'active' : ''}
          onClick={() => {
            setActive('totais');
            handleSubNavClick('totais');
          }}>
          <FontAwesomeIcon icon={faDollarSign} className="icon-dollar" />
          <span>Totais</span>
        </li>
        <li
          className={active === 'clientes' ? 'active' : ''}
          onClick={() => {
            setActive('clientes');
            handleSubNavClick('clientes');
          }}>
          <img src="/images/ic_clientes.svg" />
          <span>Clientes</span>
        </li>
      </ul>
    </nav>
  );
}

export default SubNav;