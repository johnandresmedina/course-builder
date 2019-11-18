import { handleActions } from 'redux-actions';

import { actions } from './actions';

const initialState = {
  courses: [],
  activeCourse: {},
  creatingCourse: false,
  error: {},
  fetchingCourses: false,
  fetchingCoursesError: false,
  editingCourse: false,
  editingCourseError: false,
  deletingCourse: false,
  deletingCourseError: false,
};

const CoursesReducer = handleActions(
  {
    [actions.creatingCourse]: state => ({
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
    [actions.fetchCourses]: state => ({
      ...state,
      fetchingCourses: true,
      fetchingCoursesError: {},
    }),
    [actions.fetchCoursesSuccess]: (state, action) => ({
      ...state,
      fetchingCourses: false,
      courses: action.payload.courses,
      fetchingCoursesError: {},
    }),
    [actions.fetchCoursesError]: (state, action) => ({
      ...state,
      fetchingCourses: false,
      fetchingCoursesError: action.payload.error,
    }),
    [actions.editCourse]: state => ({
      ...state,
      editingCourse: true,
      editingCourseError: {},
    }),
    [actions.editCourseSuccess]: (state, action) => ({
      ...state,
      editingCourse: false,
      activeCourse: action.payload.courseInfo,
      editingCourseError: {},
    }),
    [actions.editCourseError]: (state, action) => ({
      ...state,
      editingCourse: false,
      editingCourseError: action.payload.error,
    }),
    [actions.setActiveCourse]: (state, action) => ({
      ...state,
      activeCourse: action.payload.activeCourse,
    }),
    [actions.deleteCourse]: state => ({
      ...state,
      deletingCourse: true,
      deletingCourseError: {},
    }),
    [actions.deleteCourseSuccess]: (state, action) => ({
      ...state,
      deletingCourse: false,
      courses: action.payload.courses,
      deletingCourseError: {},
    }),
    [actions.deleteCourseError]: (state, action) => ({
      ...state,
      deletingCourse: false,
      deletingCourseError: action.payload.error,
    }),
  },
  initialState,
);

export default CoursesReducer;
