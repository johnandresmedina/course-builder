import { createActions } from 'redux-actions';

import actionTypes from './actionsTypes';
import courseService from '../services/courseService';

const actions = createActions(
  actionTypes.CREATING_COURSE,
  actionTypes.CREATE_COURSE_SUCCESS,
  actionTypes.CREATE_COURSE_ERROR,
);

const createCourse = courseInfo => dispatch => {
  dispatch(actions.creatingCourse());

  courseService
    .createCourse(courseInfo)
    .then(response => {
      dispatch(actions.createCourseSuccess({ courseInfo: response.data }));
    })
    .catch(error => {
      dispatch(actions.createCourseError({ error: error.response.data.errors[0] }));
    });
};

export { actions, createCourse };
