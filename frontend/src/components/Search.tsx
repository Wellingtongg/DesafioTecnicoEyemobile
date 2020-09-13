import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { searchCustomers } from '../store/customers/actions';
import { useDispatch } from 'react-redux';
import data from './../json_desafio.json';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>('');

  return (
    <div className="container-search">
      <FontAwesomeIcon icon={faSearch} className="icon-search" />
      <input
        type="search"
        placeholder="PESQUISAR NOME"
        onChange={e => {
          dispatch(searchCustomers(e.target.value.toString(), data.customers));
          setSearch(e.target.value);
        }}
        value={search}
      />
      <FontAwesomeIcon
        icon={faTimes}
        className="icon-times"
        onClick={() => {
          dispatch(searchCustomers('', data.customers));
          setSearch('')
        }}
        style={{ opacity: search !== '' ? 1 : 0 }}
      />
    </div>
  );
};

export default Search;