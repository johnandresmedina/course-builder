import { createActions } from 'redux-actions';

import actionTypes from './actionsTypes';

const actions = createActions(actionTypes.TOGGLE_MODAL, actionTypes.TOGGLE_EDIT_MODAL);

const toggleModal = () => dispatch => {
  dispatch(actions.toggleModal());
};

const toggleEditModal = () => dispatch => {
  dispatch(actions.toggleEditModal());
};

export { actions, toggleModal, toggleEditModal };
