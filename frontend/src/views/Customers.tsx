import React from 'react';
import Search from '../components/Search';

const Customers = () => {
  return (
    <>
      <Search />
      <table id="customers">
        <thead>
          <th style={{ minWidth: '110px' }}>id</th>
          <th style={{ minWidth: '180px' }}>nome</th>
          <th style={{ minWidth: '140px' }}>documento</th>
          <th style={{ minWidth: '150px' }}>data nascimento</th>
          <th style={{ minWidth: '140px' }}>cliente desde</th>
          <th style={{ minWidth: '150px' }}>última compra</th>
        </thead>
        <tbody>
          <tr>
            <td>987643</td>
            <td>Lorem Lipsum</td>
            <td>123.456.789-10</td>
            <td>08/03/1984</td>
            <td>27/03/2019</td>
            <td>27/09/2019</td>
          </tr>
          <tr>
            <td>987643</td>
            <td>Lorem Lipsum</td>
            <td>123.456.789-10</td>
            <td>08/03/1984</td>
            <td>27/03/2019</td>
            <td>27/09/2019</td>
          </tr>
          <tr>
            <td>987643</td>
            <td>Lorem Lipsum</td>
            <td>123.456.789-10</td>
            <td>08/03/1984</td>
            <td>27/03/2019</td>
            <td>27/09/2019</td>
          </tr>
          <tr>
            <td>987643</td>
            <td>Lorem Lipsum</td>
            <td>123.456.789-10</td>
            <td>08/03/1984</td>
            <td>27/03/2019</td>
            <td>27/09/2019</td>
          </tr>
          <tr>
            <td>987643</td>
            <td>Lorem Lipsum</td>
            <td>123.456.789-10</td>
            <td>08/03/1984</td>
            <td>27/03/2019</td>
            <td>27/09/2019</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Customers;