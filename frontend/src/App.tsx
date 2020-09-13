import React from 'react';
import MainNav from './components/MainNav';
import Breadcrumb from './components/Breadcrumb';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';

import MeuFaturamento from './views/MeuFaturamento';
import Cadastro from './views/Cadastro';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
    
  );
}

export default App;
