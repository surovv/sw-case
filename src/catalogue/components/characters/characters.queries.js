import { gql } from 'apollo-boost';

import { getQueryFilterIdField, getQueryFilters } from '../../catalogue.lib';

export const getCharactersQuery = ({ person, film, species }) => gql`{
  allPersons(
    filter: {
      ${person ? getQueryFilterIdField(person) : ''}
      ${getQueryFilters({ films: film, species })}
    }
  ) {
    id
    name
    avatar
    films {
      title
    }
  }
}`;
