import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

import { rootReducer } from '../app';

const middleware = [thunk, reduxImmutableStateInvariant()];

const enhancer = applyMiddleware(...middleware);

const configureStore = () => {
  const store = createStore(rootReducer, enhancer);

  return store;
};

export default configureStore;
