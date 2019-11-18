import { createActions } from 'redux-actions';

import actionTypes from './actionsTypes';

const actions = createActions(
  actionTypes.TOGGLE_MODAL,
  actionTypes.TOGGLE_EDIT_MODAL,
  actionTypes.TOGGLE_DELETE_MODAL,
);

const toggleModal = () => dispatch => {
  dispatch(actions.toggleModal());
};

const toggleEditModal = () => dispatch => {
  dispatch(actions.toggleEditModal());
};

const toggleDeleteModal = () => dispatch => {
  dispatch(actions.toggleDeleteModal());
};

export { actions, toggleModal, toggleEditModal, toggleDeleteModal };
