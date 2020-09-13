import { createStore } from 'redux';
import { customerReducer } from './customers/reducers';
import { combineReducers } from 'redux';
import { ICustomerState } from './customers/types';

export interface IrootReducer {
  customer: ICustomerState,
}

const rootReducer = combineReducers({
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;