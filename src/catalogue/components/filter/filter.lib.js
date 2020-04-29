import { gql } from 'apollo-boost';
import { getQueryFilters } from '../../catalogue.lib';

export const getOptionsQuery = (queryName, filters, attrs) => gql`
  {
    options: ${queryName}(
      filter: {
        ${getQueryFilters(filters)}
      }
    ) ${attrs}
  }
`;
