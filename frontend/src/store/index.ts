import { createStore } from 'redux';
import { customerReducer } from './customers/reducers';
import { combineReducers } from 'redux';
import { ICustomerState } from './customers/types';
import { ITransactionState } from './transactions/types';
import { transactionReducer } from './transactions/reducers';
import { IMainNavState } from './mainNav/types';
import { mainNavReducer } from './mainNav/reducers';

export interface IrootReducer {
  customer: ICustomerState,
  transaction: ITransactionState,
  mainNav: IMainNavState,
}

const rootReducer = combineReducers({
  customer: customerReducer,
  transaction: transactionReducer,
  mainNav: mainNavReducer,
});

const store = createStore(rootReducer);

export default store;