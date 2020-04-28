/* query builder */

import { gql } from 'apollo-boost';

const getFilterName = (type, fnName = 'some') => `${type}_${fnName}`;
const getFilterIdField = (filterId) => `id: "${filterId}"`;

const getQueryFilters = (filters) => (
  Object.keys(filters)
    .map((filterKey) => `
      ${getFilterName(filterKey)}: {
        ${getFilterIdField(filters[filterKey])}
      }
    `)
    .join('\n')
);

export const getOptionsQuery = (queryName, filters) => gql`
  {
    ${queryName}(
      filter: {
        ${getQueryFilters(filters)}
      }
    ) {
      id
      name
    }
  }
`;
