import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';

import Character from './components/character';
import { getCharactersQuery } from './characters.queries';
import styles from './characters.module.css';

const Characters = ({ filters }) => {
  const { data, loading, error } = useQuery(
    getCharactersQuery(filters),
  );

  if (error) throw new Error(error);

  const shouldRenderCharacters = !loading && data?.allPersons?.length > 0;

  return (
    shouldRenderCharacters
      ? (
        <div className={styles.charactersList}>
          {data.allPersons.map((character) => (
            <Character
              key={character.id}
              character={character}
            />
          ))}
        </div>
      )
      : (
        <div className={styles.noCharacters}>
          {loading && 'Loading...'}
          {!loading && data?.allPersons?.length === 0 && 'No characters were found :('}
        </div>
      )
  );
};

Characters.propTypes = {
  filters: PropTypes.shape().isRequired,
};

export default Characters;
