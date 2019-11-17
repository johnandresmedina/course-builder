import { handleActions } from 'redux-actions';

import { actions } from './actions';

const initialState = {
  showModal: false,
  showEditModal: false,
};

const CourseModalReducer = handleActions(
  {
    [actions.toggleModal]: state => ({
      ...state,
      showModal: !state.showModal,
    }),
    [actions.toggleEditModal]: state => ({
      ...state,
      showEditModal: !state.showEditModal,
    }),
  },
  initialState,
);

export default CourseModalReducer;
