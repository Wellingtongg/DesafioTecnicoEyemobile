export const ADD_CUSTOMERS = 'ADD_CUSTOMERS';
export const SEARCH_CUSTOMERS = 'SEARCH_CUSTOMERS';

export interface ICustomer {
  id: number;
  name: string;
  document: string;
  birthdate: string;
  customer_since: string;
  last_purchase: string;
}

export interface ICustomerState {
  customers: ICustomer[];
}

interface addCustomers {
  type: typeof ADD_CUSTOMERS
  payload: ICustomer[];
}

interface searchCustomers {
  type: typeof SEARCH_CUSTOMERS
  payload: {
    search: string,
    customers: ICustomer[];
  };
}

export type CustomerActionTypes = addCustomers | searchCustomers;
