import React from 'react';
import MainNav from './components/MainNav';
import Breadcrumb from './components/Breadcrumb';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IrootReducer } from './store';
import './index.css';

import MeuFaturamento from './views/MeuFaturamento';
import Cadastro from './views/Cadastro';
import { setClassName } from './store/mainNav/actions';

function App() {
  const dispatch = useDispatch();
  const { className } = useSelector((state: IrootReducer) => state.mainNav);

  return (
    <BrowserRouter>
      <MainNav />

      <main>
        <Breadcrumb />
        <div className="container">
          <Switch>
            <Route path="/" exact component={MeuFaturamento} />
            <Route path="/cadastro" component={Cadastro} />
          </Switch>
        </div>
        <div id="overlay" className={className} onClick={() => dispatch(setClassName(''))} />
      </main>
    </BrowserRouter>
  );
}

export default App;
