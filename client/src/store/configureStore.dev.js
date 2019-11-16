import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { rootReducer, DevTools } from '../app';

const middleware = [thunk, reduxImmutableStateInvariant(), logger];

const enhancer = compose(applyMiddleware(...middleware), DevTools.instrument());

const configureStore = () => {
  const store = createStore(rootReducer, enhancer);

  return store;
};

export default configureStore;
