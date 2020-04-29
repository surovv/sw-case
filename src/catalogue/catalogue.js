import React from 'react';

import Filter from './components/filter';
import Characters from './components/characters';
import useFilters from './useFilters';
import { filtersData } from './catalogue.lib';

import styles from './catalogue.module.css';


const Catalogue = () => {
  const { filters, setFilter } = useFilters();

  return (
    <div>
      <div className={styles.filters}>
        {Object.keys(filtersData).map((name) => (
          <Filter
            key={name}
            allFilters={filtersData[name].getCustomFIlters?.(filters) || filters}
            filterName={name}
            queryName={filtersData[name].queryName}
            queryAttrs={filtersData[name].queryAttrs}
            onChange={setFilter}
          />
        ))}
      </div>

      <Characters filters={filters} />
    </div>
  );
};

export default Catalogue;
