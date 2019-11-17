import { handleActions } from 'redux-actions';

import { actions } from './actions';

const initialState = {
  courses: [],
  activeCourse: {},
  creatingCourse: false,
  error: {},
};

const CoursesReducer = handleActions(
  {
    [actions.creatingCourse]: (state, action) => ({
      ...state,
      creatingCourse: true,
      error: {},
    }),
    [actions.createCourseSuccess]: (state, action) => ({
      ...state,
      creatingCourse: false,
      activeCourse: action.payload.courseInfo,
      error: {},
    }),
    [actions.createCourseError]: (state, action) => ({
      ...state,
      creatingCourse: false,
      error: action.payload.error,
    }),
  },
  initialState,
);

export default CoursesReducer;
