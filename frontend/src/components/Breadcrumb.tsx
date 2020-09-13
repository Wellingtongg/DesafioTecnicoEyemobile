import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

const Breadcrumb: React.FC = () => {
  const [breadcrumb, setBreadcrumb] = useState<string>('');
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case '/':
        setBreadcrumb('Meu Faturamento');
        break;
      case '/cadastro':
        setBreadcrumb('Cadastro');
        break;
      default:
        setBreadcrumb('');
    }
  }, [pathname]);

  return (
    <div id="breadcrumb">
      <img src="images/ic_menu.svg" className="icon-menu" alt="menu" />PetShop <span className="divider">|</span> {breadcrumb}
    </div>
  );
}

export default Breadcrumb;