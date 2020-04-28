import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { client } from '../../../apollo.index';
import { queries } from './filter.queries';

const Filter = ({ allFilters, filterName, onChange }) => {
  const handleChange = (event) => onChange({ [filterName]: event.target.value });
  const { [filterName]: currentOption, ...filters } = allFilters;

  const [options, setOptions] = useState([]);

  useEffect(
    () => {
      client.query({
        query: queries[filterName],
        variables: filters,
      })
        .then(({ data }) => setOptions(data.options));
    },
    [JSON.stringify(filters)],
  );

  return (
    <select value={currentOption} onChange={handleChange}>
      <option disabled selected value>Select</option>
      {options.map((option) => (
        <option
          key={option.id}
          value={option.id}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

Filter.propTypes = {
  filterName: PropTypes.string.isRequired,
  allFilters: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
