import { createActions } from 'redux-actions';

import actionTypes from './actionsTypes';
import courseService from '../services/courseService';
import { toggleModal, toggleEditModal } from '../modal/actions';

const actions = createActions(
  actionTypes.CREATING_COURSE,
  actionTypes.CREATE_COURSE_SUCCESS,
  actionTypes.CREATE_COURSE_ERROR,
  actionTypes.FETCH_COURSES,
  actionTypes.FETCH_COURSES_SUCCESS,
  actionTypes.FETCH_COURSES_ERROR,
  actionTypes.EDIT_COURSE,
  actionTypes.EDIT_COURSE_SUCCESS,
  actionTypes.EDIT_COURSE_ERROR,
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

const editCourse = courseInfo => dispatch => {
  dispatch(actions.editCourse());

  courseService
    .editCourse(courseInfo)
    .then(response => {
      dispatch(actions.editCourseSuccess({ courseInfo: response.data }));
      dispatch(toggleEditModal());
    })
    .catch(error => {
      dispatch(actions.editCourseError({ error: error.response.data.errors[0] }));
    });
};

const getAllCourses = () => dispatch => {
  dispatch(actions.fetchCourses());

  courseService
    .getAllCourses()
    .then(response => {
      dispatch(actions.fetchCoursesSuccess({ courses: response.data }));
    })
    .catch(error => {
      dispatch(actions.fetchCoursesError({ error: error }));
    });
};

export { actions, createCourse, editCourse, getAllCourses };
