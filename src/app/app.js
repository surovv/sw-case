import React from 'react';
import styles from './app.module.css';
import logo from './assets/starwars-sensorfact.png';

const App = () => (
  <div className={styles.root}>
    <div className={styles.content}>
      <img src={logo} alt="starwars sensorfact logo" />
    </div>
  </div>
);

export default App;
