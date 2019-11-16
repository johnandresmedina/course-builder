import { hot } from 'react-hot-loader/root';
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import DevTools from './Devtools';
import App from './App';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <>
        <App />
        <DevTools />
      </>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default hot(Root);
