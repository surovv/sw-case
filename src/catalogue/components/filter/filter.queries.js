import { gql } from 'apollo-boost';

const filterFragments = {
  filmsSome: `
    films_some: {
      id: $film
    }
  `,
  speciesSome: `
    species_some: {
      id: $species
    }
  `,
};

export const queries = {
  film: gql`
    query getFilms($person: ID, $species: ID) {
      options: allFilms(
        filter: {
          characters_some: {
            id: $person
          }
          ${filterFragments.speciesSome}
        }
      ){
        id
        label: title
      }
    }
  `,

  species: gql`
    query getSpecies($film: ID, $person: ID) {
      options: allSpecies(
        filter: {
          people_some: {
            id: $person
          }
          ${filterFragments.filmsSome}
        }
      ){
        id
        label: name
      }
    }
  `,

  person: gql`
    query getPersons($film: ID, $species: ID) {
      options: allPersons(
        filter: {
          ${filterFragments.filmsSome}
          ${filterFragments.speciesSome}
        }
      ) {
        id
        label: name
      }
    }
  `,
};
