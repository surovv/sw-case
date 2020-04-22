import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './error-boundary.module.css';

export default class ErrorBoundary extends PureComponent {
  state = {
    errorMessage: '',
  };

  static getDerivedStateFromError = (error) => ({ errorMessage: error.toString() });

  // componentDidCatch = (error, errorInfo) => logError(error, errorInfo);

  render = () => (
    <>
      {this.state.errorMessage && (
        <div className={styles.error}>
          {this.state.errorMessage}
        </div>
      )}
      {this.props.children}
    </>
  );
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};
