import React from 'react';
import MainNav from './components/MainNav';
import Breadcrumb from './components/Breadcrumb';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';

import MeuFaturamento from './views/MeuFaturamento';
import Cadastro from './views/Cadastro';

function App() {
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
      </main>
    </BrowserRouter>
  );
}

export default App;
