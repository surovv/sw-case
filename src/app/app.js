import React from 'react';

import Catalogue from '../catalogue';

import styles from './app.module.css';
import logo from './assets/starwars-sensorfact.png';

const App = () => (
  <div className={styles.root}>
    <div className={styles.content}>
      <img
        src={logo}
        alt="starwars sensorfact logo"
        className={styles.logo}
      />
      <Catalogue />
    </div>
  </div>
);

export default App;
