import { handleActions } from 'redux-actions';

import { actions } from './actions';

const initialState = {
  showModal: false,
};

const CourseModalReducer = handleActions(
  {
    [actions.toggleModal]: (state, action) => ({
      ...state,
      showModal: !state.showModal,
    }),
  },
  initialState,
);

export default CourseModalReducer;
