import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-dropdown-now';
import 'react-dropdown-now/style.css';

import { client } from '../../../apollo.index';
import { getOptionsQuery } from './filter.lib';
import styles from './filter.module.css';

const Filter = ({
  allFilters, filterName, queryName, queryAttrs, onChange,
}) => {
  const handleChange = ({ value }) => onChange({ [filterName]: value });

  const { [filterName]: currentOption, ...filters } = allFilters;

  const [options, setOptions] = useState([]);

  const stringifiedFilters = JSON.stringify(filters);

  useEffect(
    () => {
      client.query({
        query: getOptionsQuery(queryName, filters, queryAttrs),
      })
        .then(({ data }) => setOptions(data.options));
    },
    // eslint-disable-next-line
    [stringifiedFilters],
  );

  return (
    <Dropdown
      options={options}
      onChange={handleChange}
      placeholder={`Select ${filterName}`}
      className={styles.root}
    />
  );
};

Filter.propTypes = {
  filterName: PropTypes.string.isRequired,
  allFilters: PropTypes.shape({}).isRequired,
  queryName: PropTypes.string.isRequired,
  queryAttrs: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
