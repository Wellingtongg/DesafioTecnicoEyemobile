import React, {useCallback, useEffect} from 'react';
import Search from '../components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomers } from '../store/customers/actions';
import { IrootReducer } from '../store';
import data from './../json_desafio.json';

const Customers:React.FC = () => {
  const dispatch = useDispatch();
  const { customers } = useSelector((state: IrootReducer) => state.customer);

  const handleAddCustomers = useCallback(() => {
    dispatch(addCustomers(data.customers));
  }, [dispatch]);

  useEffect(() => {
    handleAddCustomers();
  }, [handleAddCustomers]);

  return (
    <>
      <Search />
      <table id="customers">
        <thead>
          <tr>
            <th style={{ minWidth: '110px' }}>id</th>
            <th style={{ minWidth: '180px' }}>nome</th>
            <th style={{ minWidth: '140px' }}>documento</th>
            <th style={{ minWidth: '150px' }}>data nascimento</th>
            <th style={{ minWidth: '140px' }}>cliente desde</th>
            <th style={{ minWidth: '150px' }}>última compra</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id.toString()}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.document}</td>
              <td>{customer.birthdate}</td>
              <td>{customer.customer_since}</td>
              <td>{customer.last_purchase}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Customers;