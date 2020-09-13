import React, { useState } from 'react';
import SubNav from './../components/SubNav';
import Totals from './Totals';
import Customers from './Customers';

const MeuFaturamento: React.FC = () => {
  const [active, setActive] = useState('totais');

  const handleSubNavClick = (activeSubNav: string): void => {
    setActive(activeSubNav);
  };

  return (
    <>
      <SubNav handleSubNavClick={activeSubNav => handleSubNavClick(activeSubNav)} />
      <div className="content">
        {active === 'totais' ? (
          <Totals />
        ) : (
          <Customers />
        )}
      </div>
    </>
  );
}

export default MeuFaturamento;