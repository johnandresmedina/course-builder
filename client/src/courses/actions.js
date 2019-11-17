import { createActions } from 'redux-actions';

import actionTypes from './actionsTypes';
import courseService from '../services/courseService';
import { toggleModal } from '../modal/actions';

const actions = createActions(
  actionTypes.CREATING_COURSE,
  actionTypes.CREATE_COURSE_SUCCESS,
  actionTypes.CREATE_COURSE_ERROR,
);

const createCourse = (courseInfo, history) => dispatch => {
  dispatch(actions.creatingCourse());

  courseService
    .createCourse(courseInfo)
    .then(response => {
      dispatch(actions.createCourseSuccess({ courseInfo: response.data }));
      dispatch(toggleModal());
      history.push('/create-content');
    })
    .catch(error => {
      dispatch(actions.createCourseError({ error: error.response.data.errors[0] }));
    });
};

export { actions, createCourse };
