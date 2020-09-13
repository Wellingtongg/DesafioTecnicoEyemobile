import { ICustomer, ADD_CUSTOMERS, SEARCH_CUSTOMERS, CustomerActionTypes } from './types';

export function addCustomers(customers: ICustomer[]): CustomerActionTypes {
  return {
    type: ADD_CUSTOMERS,
    payload: customers,
  }
}

export function searchCustomers(search: string, customers: ICustomer[]): CustomerActionTypes {
  return {
    type: SEARCH_CUSTOMERS,
    payload: {
      search,
      customers,
    }
  }
}
