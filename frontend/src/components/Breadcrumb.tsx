import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import { setClassName } from '../store/mainNav/actions';

const Breadcrumb: React.FC = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [breadcrumb, setBreadcrumb] = useState<string>('');

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
      <img src="images/ic_menu.svg" className="icon-menu" alt="menu" onClick={() => dispatch(setClassName('visible'))} />
      PetShop <span className="divider">|</span> {breadcrumb}
    </div>
  );
}

export default Breadcrumb;