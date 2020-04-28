import React from 'react';

import Filter from './components/filter';
import useFilters from './useFilters';

const filterNames = ['film', 'species', 'person'];

const Catalogue = () => {
  const { filters, setFilter } = useFilters();

  return (
    <div>
      {filterNames.map((name) => (
        <Filter
          allFilters={filters}
          filterName={name}
          onChange={setFilter}
        />
      ))}
    </div>
  );
};

export default Catalogue;
