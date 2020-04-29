import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './character.module.css';


const Character = ({ character }) => (
  <div className={styles.root}>
    <img
      src={character.avatar}
      alt={character.name}
      className={styles.avatar}
    />
    <div className={styles.name}>
      {character.name}
    </div>
    {!!character.films.length && (
      <div className={styles.films}>
        <div className={styles.filmsLabel}>MOVIES</div>
        {character.films.map(({ title }) => title).join(', ')}
      </div>
    )}
  </div>
);

Character.propTypes = {
  character: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    films: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};


const areEqual = (prevProps, nextProps) => (
  prevProps.character.id === nextProps.character.id
);

export default memo(Character, areEqual);
