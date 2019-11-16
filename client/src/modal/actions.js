import { createActions } from 'redux-actions';

import actionTypes from './actionsTypes';

const actions = createActions(actionTypes.TOGGLE_MODAL);

const toggleModal = () => dispatch => {
  dispatch(actions.toggleModal());
};

export { actions, toggleModal };
