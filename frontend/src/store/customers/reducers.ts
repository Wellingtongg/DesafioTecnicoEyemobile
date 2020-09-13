import { ICustomerState, CustomerActionTypes, ADD_CUSTOMERS, SEARCH_CUSTOMERS } from './types';

const initialState: ICustomerState = {
  customers: [],
}

export function customerReducer(state = initialState, action: CustomerActionTypes): ICustomerState {
  switch (action.type) {
    case ADD_CUSTOMERS:
      return {
        customers: action.payload,
      }
    case SEARCH_CUSTOMERS:
      return {
        customers: action.payload.customers.filter(
          customer => customer.name.toLowerCase().includes(action.payload.search.toLowerCase()),
        ),
      }
    default:
      return state;
  }
}
