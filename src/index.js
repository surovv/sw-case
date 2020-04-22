import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from '@apollo/react-hooks';
import { client as apolloClient } from './apollo.index';

import App from './app';
import './index.css';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
