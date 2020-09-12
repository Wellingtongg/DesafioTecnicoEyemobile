import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  return (
    <div className="container-search">
      <FontAwesomeIcon icon={faSearch} className="icon-search" />
      <input type="search" placeholder="PESQUISAR NOME" onChange={e => setSearch(e.target.value)} value={search} />
      <FontAwesomeIcon
        icon={faTimes}
        className="icon-times"
        onClick={() => setSearch('')}
        style={{ opacity: search !== '' ? 1 : 0 }}
      />
    </div>
  );
};

export default Search;